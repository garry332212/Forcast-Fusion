import axios from "axios";
import { api_Endpoint, api_key } from "./modules";
import { ForecastData } from "../components/ForcastComponent";

//!function to change weather time to redable time
export const formatTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const minutes = date.getMinutes();
  return `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
};


  //!function to fetch the default location of the user
  export const fetchCurrentWeather = async (lat: number, lon: number) => {
    const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  };

  //!Function to fetch the Forcast weather
  export const fetchForecast = async (
    lat: number,
    lon: number
  ): Promise<ForecastData[]> => {
    const url = `${api_Endpoint}forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);

    return response.data.list;
  };



//!Function to change the date to En-UK
export const dateFormatted = (dateString: string | number | Date) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

//!for the bottom section with Major Cities

export const citiesTemprature = [
  { name: "Wellington", temp: "15°" },
  { name: "Hamilton", temp: "17°" },
  { name: "Christchurch", temp: "10°" },
  { name: "Queenstown", temp: "8°" },
  { name: "Auckland", temp: "12°" },
];
