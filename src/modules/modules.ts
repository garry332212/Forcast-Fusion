import axios from "axios";

//enviourmental var for apis
const api_key = process.env.REACT_APP_API_KEY;
const api_Endpoint = process.env.REACT_APP_API_ENDPOINT;

//!Type Declaration for Weather
export interface WeatherData {
  name: string;
  dt:number;
 
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };

  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  wind: {
    speed: number;
  };

  weather: {
    main: string;
    description: string;
  }[];
}

//!Type Declaration for Forecast
export interface ForecastData {
  dt_txt: string; // Date of the forecast
  dt:number;
  city: {
    country: string;
    name: string;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
  };

  //* since weather is an array element
  weather: {
    main: string;
    description: string;
    icon:string;
  }[];

  wind: {
    speed: string;
  };
}

  //! Search Function!
 export const fetchWeatherData = async (city: string) => {
    try {
      const weatherResponse = await axios.get(
        `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`
      );
      const forecastResponse = await axios.get(
        `${api_Endpoint}forecast?q=${city}&appid=${api_key}&units=metric`
      );
     

      const currentWeatherData: WeatherData = weatherResponse.data;
      const forecastList: ForecastData[] = forecastResponse.data.list;
      return { currentWeatherData, forecastList };
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it at the higher level
    }
  };

  //!function to fetch the default location of the user
  export const fetchCurrentWeather = async (lat: number, lon: number) => {
    const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  };

  //!function to fetch the default location's forcast
  export const fetchForecast = async (
    lat: number,
    lon: number
  ): Promise<ForecastData[]> => {
    const url = `${api_Endpoint}forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    return response.data.list;
  };

//!Convert unix timestamp to human readable time from the api
export const convertUnixTimestampToTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}`;
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

//!Celsius to Fah conversion
export const celsiusToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;


//!Google Fonts:

export const fontFamily = {
  roboto: "'Roboto', sans-serif",
  wind: "'Shadows Into Light', cursive",
  description: "'Quicksand', sans-serif",
  temprature: "'Lumanosimo', cursive",
  input: "'Signika Negative', sans-serif",
};