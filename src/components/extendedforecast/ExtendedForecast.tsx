import { iconMap } from "@/utils/iconMap";
import { ForecastWeatherData } from "../../types/weather";
import { IconKey } from "@/types/iconKey";
import { FormattedDate } from "@/utils/functions/forecastWeather/FormattedDate";
import {
  Date,
  DayForecast,
  Description,
  ForecastWrapper,
  Icon,
  Temp,
} from "./style";

interface Props {
  data: ForecastWeatherData[];
}

export const ExtendedForecastComponent: React.FC<Props> = ({ data }) => {
  return (
    <ForecastWrapper>
      {data.map((day) => {
        const iconClass = iconMap[day.icon as IconKey];
        return (
          <DayForecast key={day.dt_txt}>
            <Date>{FormattedDate(day.dt_txt)}</Date>
            <Icon className={`wi ${iconClass}`} />
            <Description>{day.description}</Description>
            <Temp>
              {Math.round(day.tempMin)}°C / {Math.round(day.tempMax)}°C
            </Temp>
          </DayForecast>
        );
      })}
    </ForecastWrapper>
  );
};
