import { ForecastWeatherData } from "@/types/weather";

export const extractNextDaysForecast = (data: ForecastWeatherData[]): ForecastWeatherData[] => {
  const currentDate = new Date().toISOString().split('T')[0];
  const aggregatedData: { [key: string]: ForecastWeatherData } = {};
  const conditionCounts: { [key: string]: { [condition: string]: number } } = {};

  for (let entry of data) {
    const entryDate = entry.dt_txt.split(' ')[0];
    if (entryDate <= currentDate) continue; // Ignore today's data

    // Initialize the day's entry if it doesn't exist
    if (!aggregatedData[entryDate]) {
      aggregatedData[entryDate] = {
        dt_txt: entryDate,
        icon: entry.icon,
        description: entry.description,
        tempMin: entry.tempMin,
        tempMax: entry.tempMax
      };
      conditionCounts[entryDate] = {
        [entry.description]: 1
      };
    } else {
      // Update the min and max temperatures if necessary
      aggregatedData[entryDate].tempMin = Math.min(aggregatedData[entryDate].tempMin, entry.tempMin);
      aggregatedData[entryDate].tempMax = Math.max(aggregatedData[entryDate].tempMax, entry.tempMax);

      // Track the weather condition
      if (conditionCounts[entryDate][entry.description]) {
        conditionCounts[entryDate][entry.description]++;
      } else {
        conditionCounts[entryDate][entry.description] = 1;
      }
    }
  }

  // Determine the most frequent weather condition and its icon for each day
  for (let date in aggregatedData) {
    const mostFrequentCondition = Object.keys(conditionCounts[date]).reduce((a, b) => conditionCounts[date][a] > conditionCounts[date][b] ? a : b);
    aggregatedData[date].description = mostFrequentCondition;
    const mostFrequentConditionEntry = data.find(d => d.description === mostFrequentCondition);
    if (mostFrequentConditionEntry) {
      aggregatedData[date].icon = mostFrequentConditionEntry.icon;
    }
  }

  return Object.values(aggregatedData);
}