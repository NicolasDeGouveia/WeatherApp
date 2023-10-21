import { useQuery } from "react-query";
import { fetchCurrentWeather, fetchForecastWeather } from "./api/weather";
import { CurrentWeatherData, ForecastWeatherData } from "@/types/weather";
import { CurrentWeatherComponent } from "@/components/currentweather/CurrentWeather";
import styled from "styled-components";
import { ExtendedForecastComponent } from "@/components/extendedforecast/ExtendedForecast";

const WeatherPage = () => {
  const { data: currentWeather, isFetching } = useQuery<CurrentWeatherData>(
    "currentWeather",
    () => fetchCurrentWeather("Paris")
  );
  const { data: extendedForecast, isFetched } = useQuery<ForecastWeatherData[]>(
    "forecastWeather",
    () => fetchForecastWeather("Paris")
  );

  if (isFetching) return <div>LOADING</div>;

  if (!isFetching && isFetched) {
    return (
      <Wrapper>
        <CurrentWeatherComponent data={currentWeather!} />
        <ExtendedForecastComponent data={extendedForecast!} />
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  max-width: 77.5rem;
  margin: auto;
`;

export default WeatherPage;
