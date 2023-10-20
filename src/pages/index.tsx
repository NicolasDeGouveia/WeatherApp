import { useQuery } from "react-query";
import { fetchCurrentWeather, fetchForecastWeather } from "./api/weather";
import { CurrentWeatherData, ForecastWeatherData } from "@/types/weather";
import { CurrentWeatherComponent } from "@/components/currentweather/CurrentWeather";
import styled from "styled-components";

const WeatherPage = () => {
  const { data: currentWeather, isFetching } = useQuery<CurrentWeatherData>(
    "currentWeather",
    () => fetchCurrentWeather("Paris")
  );
  const { data: extendedForecast } = useQuery<ForecastWeatherData[]>(
    "forecastWeather",
    () => fetchForecastWeather("Paris")
  );

  if (isFetching) return <div>LOADING</div>;

  return (
    <Wrapper>{<CurrentWeatherComponent data={currentWeather!} />}</Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 77.5rem;
  margin: auto;
`;

export default WeatherPage;
