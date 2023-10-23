import { extractNextDaysForecast } from "./extractNextDaysForecast";
import { formatForecastWeatherData } from "./formatForecastWeatherData";

export const fetchForecastWeather = async (city: string) => {
  const response = await fetch(`http://localhost:3000/api/forecastweather?city=${city}`);
  const data = await response.json();
  const formatForecastWeather = formatForecastWeatherData(data);
  return extractNextDaysForecast(formatForecastWeather)
};
