import { IconKey } from "@/types/iconKey";

export const iconMap: Record<IconKey, string> = {
  "01d": "wi-day-sunny", // Ciel clair (jour)
  "01n": "wi-night-clear", // Ciel clair (nuit)
  "02d": "wi-day-cloudy", // Quelques nuages (jour)
  "02n": "wi-night-alt-cloudy", // Quelques nuages (nuit)
  "03d": "wi-cloud", // Nuageux (jour)
  "03n": "wi-cloud", // Nuageux (nuit)
  "04d": "wi-cloudy", // Très nuageux (jour)
  "04n": "wi-cloudy", // Très nuageux (nuit)
  "09d": "wi-showers", // Averse (jour)
  "09n": "wi-showers", // Averse (nuit)
  "10d": "wi-day-rain", // Pluie (jour)
  "10n": "wi-night-alt-rain", // Pluie (nuit)
  "11d": "wi-day-thunderstorm", // Orage (jour)
  "11n": "wi-night-alt-thunderstorm", // Orage (nuit)
  "13d": "wi-day-snow", // Neige (jour)
  "13n": "wi-night-alt-snow", // Neige (nuit)
  "50d": "wi-day-fog", // Brouillard (jour)
  "50n": "wi-night-fog", // Brouillard (nuit)
};