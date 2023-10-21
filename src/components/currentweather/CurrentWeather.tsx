import { IconKey } from "@/types/iconKey";
import { CurrentWeatherData } from "../../types/weather";
import { iconMap } from "@/utils/iconMap";
import "weather-icons/css/weather-icons.css";
import {
  CityName,
  CurrentRight,
  CurrentWrapper,
  CurrentWrapperInfo,
  Humidity,
  HumidityValue,
  Icon,
  IconAndDescriptionWrapper,
  IconRight,
  Separator,
  Temperature,
  TemperatureMinMax,
  WeatherDate,
  WeatherDescription,
  Wind,
  WindValue,
} from "./style";

interface Props {
  data: CurrentWeatherData;
}

export const CurrentWeatherComponent: React.FC<Props> = ({ data }) => {
  const iconClass = iconMap[data.icon as IconKey];
  return (
    <CurrentWrapper>
      <CurrentWrapperInfo>
        <CityName>{data.name}</CityName>
        <WeatherDate>{data.dt_txt}</WeatherDate>
        <Separator />
        <Temperature>{Math.round(data.temperature)}°C</Temperature>
        <TemperatureMinMax>
          {Math.round(data.tempMax)} / {Math.round(data.tempMin)} °C
        </TemperatureMinMax>

        <IconAndDescriptionWrapper>
          <Icon className={`wi ${iconClass}`} />
          <WeatherDescription>{data.description}</WeatherDescription>
        </IconAndDescriptionWrapper>
        <Separator />
        <Wind>
          Wind: <WindValue>{data.wind} km/h</WindValue>
        </Wind>
        <Humidity>
          Humidity: <HumidityValue>{data.humidity} %</HumidityValue>
        </Humidity>
      </CurrentWrapperInfo>
      <CurrentRight>
        <IconRight className={`wi ${iconClass}`} />
      </CurrentRight>
    </CurrentWrapper>
  );
};
