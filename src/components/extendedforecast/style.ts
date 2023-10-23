import styled from "styled-components";

export const DayForecast = styled.div`
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

export const Date = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Temp = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
`;

export const Icon = styled.i`
  font-size: 2rem;
  color: #007bff;
  margin: 10px 0 10px 0;
`;

export const Description = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 16px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ForecastWrapper = styled.div`
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
