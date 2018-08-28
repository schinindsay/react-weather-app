import axios from "axios";

const API_KEY = "f386691c0cd26a16742b12643c9b113e";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us&units=imperial`;
  const request = axios.get(url);

  console.log('Request', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
