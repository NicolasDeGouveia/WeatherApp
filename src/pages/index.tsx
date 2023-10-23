import { QueryClient, dehydrate, useQuery } from "react-query";

import { CurrentWeatherData, ForecastWeatherData } from "@/types/weather";
import { CurrentWeatherComponent } from "@/components/currentweather/CurrentWeather";
import { ExtendedForecastComponent } from "@/components/extendedforecast/ExtendedForecast";
import { fetchCurrentWeather } from "@/utils/functions/currentWeather/fetchCurrentWeather ";
import { fetchForecastWeather } from "@/utils/functions/forecastWeather/fetchForecastWeather";

import { Wrapper } from "../styles/style";

const WeatherPage = () => {
  const { data: currentWeatherData } = useQuery<CurrentWeatherData>(
    "currentWeather",
    () => fetchCurrentWeather("Paris")
  );

  const { data: forecastWeatherData } = useQuery<ForecastWeatherData[]>(
    "forecastWeather",
    () => fetchForecastWeather("Paris")
  );

  if (!currentWeatherData || !forecastWeatherData) return <div>Error</div>;

  return (
    <Wrapper>
      <CurrentWeatherComponent data={currentWeatherData} />
      <ExtendedForecastComponent data={forecastWeatherData} />
    </Wrapper>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  const query: string = "Paris";

  await queryClient.prefetchQuery<CurrentWeatherData>(
    "currentWeather",
    async () => await fetchCurrentWeather(query)
  );

  await queryClient.prefetchQuery<ForecastWeatherData[]>(
    "forecastWeather",
    async () => await fetchForecastWeather(query)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default WeatherPage;
