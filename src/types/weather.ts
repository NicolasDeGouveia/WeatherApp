// weather.ts

// Data structure for Current Weather
export interface CurrentWeatherData {
  name: string;
  dt_txt: string;
  temperature: number;
  tempMin: number;
  tempMax: number;
  description: string;
  icon: string;
  wind: number;
  humidity: number;
}

// Data structure for Forecast Weather
export interface ForecastWeatherData {
  dt_txt: string;
  icon: string;
  description: string;
  tempMin: number;
  tempMax: number;
}[]
