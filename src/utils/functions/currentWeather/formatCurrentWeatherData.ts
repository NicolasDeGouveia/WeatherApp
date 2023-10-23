import { CurrentWeatherData } from "@/types/weather";

export const formatCurrentWeatherData = (data: any): CurrentWeatherData => {
    const currentDate = new Date(data.dt * 1000);

    return {
        name: data.name,
        dt_txt: `${currentDate.toLocaleString('default', { weekday: 'long' })}, ${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'long' })}`,
        temperature: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        wind: data.wind.speed,
        humidity: data.main.humidity,
    };
}