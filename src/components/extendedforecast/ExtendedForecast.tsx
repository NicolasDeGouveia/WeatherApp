import { iconMap } from "@/utils/iconMap";
import { ForecastWeatherData } from "../../types/weather";
import styled from "styled-components";
import { IconKey } from "@/types/iconKey";
import { FormattedDate } from "@/utils/functions/forecastWeather/FormattedDate";

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

const DayForecast = styled.div`
  background-color: #e9e9e9;
  padding: 10px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(20% - 5px);
  flex-grow: 1;
  flex-shrink: 0;
  &:last-child {
    margin-right: 0;
  }
`;

const Date = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Temp = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
`;

const Icon = styled.i`
  font-size: 2rem;
  color: #007bff;
  margin: 10px 0 10px 0;
`;

const Description = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 16px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ForecastWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    align-items: center;
    overflow-x: visible;
    white-space: normal;
  }
`;
