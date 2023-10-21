import styled from "styled-components";

export const CurrentWrapper = styled.div`
  display: flex;
`;

export const CurrentRight = styled.div`
  background: linear-gradient(140deg, #004c9c, #398bce);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 0 5px 0 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CurrentWrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  background: linear-gradient(140deg, #007bff, #56a3f7);
  color: white;
  padding: 20px;
  border-radius: 5px 0 0 0;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const CityName = styled.h1`
  font-size: 24px;
  margin-bottom: 2px;
`;

export const WeatherDate = styled.h2`
  font-size: 16px;
  margin: 0;
  font-weight: 200;
`;

export const Temperature = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
`;
export const TemperatureMinMax = styled.div`
  font-size: 16px;
  font-weight: 200;
  margin: 0;
`;

export const Separator = styled.div`
  background-color: white;
  height: 1px;
  width: 100%;
  margin: 8px 5px 12px 0;
`;

export const Wind = styled.div`
  font-weight: 200;
`;
export const WindValue = styled.span`
  font-weight: bold;
`;

export const Humidity = styled.div`
  font-weight: 200;
`;
export const HumidityValue = styled.span`
  font-weight: bold;
`;

export const Icon = styled.i`
  font-size: 2rem;
  color: white;
  margin-right: 1rem;
`;

export const IconRight = styled.i`
  font-size: 6rem;
  color: white;
`;

export const WeatherDescription = styled.p`
  font-weight: 200;
  text-transform: capitalize;
`;

export const IconAndDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;