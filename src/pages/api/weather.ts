import { CurrentWeatherData, ForecastWeatherData } from "@/types/weather";
import { formatCurrentWeatherData } from "@/utils/functions/currentWeather/formatCurrentWeatherData";
import { extractNextDaysForecast } from "@/utils/functions/forecastWeather/extractNextDaysForecast";
import { formatForecastWeatherData } from "@/utils/functions/forecastWeather/formatForecastWeatherData";



export const fetchCurrentWeather = async (city: string): Promise<CurrentWeatherData> => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=37792b4f59333e24f9ff913adf72f19c`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données météorologiques actuelles');
  }
  const rawData = await response.json();
  return formatCurrentWeatherData(rawData);
  
};






export const fetchForecastWeather = async (city: string): Promise<ForecastWeatherData[]> => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=37792b4f59333e24f9ff913adf72f19c`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données météorologiques de prévision');
  }
  const data = await response.json();
  const formatForecastWeather = formatForecastWeatherData(data);
  return extractNextDaysForecast(formatForecastWeather)
};

