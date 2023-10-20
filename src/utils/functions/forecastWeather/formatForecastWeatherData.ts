import { ForecastWeatherData } from "@/types/weather";

export const formatForecastWeatherData = (data: any): ForecastWeatherData[] => {
  return data.list.map((entry: any) => ({
    dt_txt: entry.dt_txt,
    icon: entry.weather[0].icon,
    description: entry.weather[0].description,
    tempMin: entry.main.temp_min,
    tempMax: entry.main.temp_max
  }));
};