// pages/WeatherPage.tsx
import { useQuery } from "react-query";
import { fetchCurrentWeather, fetchForecastWeather } from "./api/weather";
import { CurrentWeatherData, ForecastWeatherData } from "@/types/weather";

const WeatherPage = () => {
  const { data: currentWeather, isFetching } = useQuery<CurrentWeatherData>(
    "currentWeather",
    () => fetchCurrentWeather("Paris")
  );
  const { data: extendedForecast } = useQuery<ForecastWeatherData[]>(
    "forecastWeather",
    () => fetchForecastWeather("Paris")
  );

  return (
    <div>
      {
        // COMPONENTS HERE
      }
    </div>
  );
};

export default WeatherPage;
