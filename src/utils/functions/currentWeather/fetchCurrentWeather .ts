import { formatCurrentWeatherData } from "./formatCurrentWeatherData";

export const fetchCurrentWeather = async (city: string) => {
  const response = await fetch(`http://localhost:3000/api/currentweather?city=${city}`);
  const rawData = await response.json();
  return formatCurrentWeatherData(rawData);
};