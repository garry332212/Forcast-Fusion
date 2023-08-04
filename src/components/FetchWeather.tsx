import axios from "axios";
import React from "react";
import { api_Endpoint, api_key } from "../modules/modules";
import WeatherInfo from "./WeatherInfo";
import { GiModernCity } from "react-icons/gi";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { PiThermometerCold,PiFlagDuotone } from "react-icons/pi";
import { TiWeatherStormy } from "react-icons/ti";

export interface WeatherData {
  name: string;
  //*fetches as an object
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  //*fetches as an object
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

//!THE  forcast data props
export interface ForecastData {
  dt_txt: string; // Date of the forecast
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
  }[];

  wind: {
    speed: string;
  };
}

const FetchWeather = () => {
  const [currentWeather, setCurrentWeather] =
    React.useState<WeatherData | null>(null);

  const [forecastData, setForecastData] = React.useState<ForecastData[]>([]);

  React.useEffect(() => {
    // Get user's current location weather and forecast
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        Promise.all([
          fetchCurrentWeather(latitude, longitude),
          fetchForecast(latitude, longitude),
        ]).then(([currentWeatherData, forecastData]) => {
          setCurrentWeather(currentWeatherData);
          setForecastData(forecastData);
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  //!function to fetch the default location of the user
  const fetchCurrentWeather = async (lat: number, lon: number) => {
    const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  };

  //!function to fetch the default location forcast
  const fetchForecast = async (
    lat: number,
    lon: number
  ): Promise<ForecastData[]> => {
    const url = `${api_Endpoint}forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    return response.data.list;
  };

  //!sunset sunrise time format 
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const minutes = date.getMinutes();
    return `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  };
  
  return (
    <>
    {currentWeather ? (
      <>
        <WeatherInfo title="City" value={currentWeather.name} icon={<GiModernCity/>}/>
        {currentWeather.sys && (
          <WeatherInfo title="Country" value={currentWeather.sys.country} icon={<PiFlagDuotone/>}/>
        )}
        <WeatherInfo
          title="Temperature"
          value={`${currentWeather.main.temp.toFixed(0)}°C`}
          icon={<TiWeatherStormy/>}
          
        />
        <WeatherInfo
          title="Feels Like"
          value={`${currentWeather.main.feels_like.toFixed(0)}°C`}
          icon={<PiThermometerCold/>}
        />
        <WeatherInfo
          title="Humidity"
          value={`${currentWeather.main.humidity}%`}
          icon={<WiHumidity/>}
        />
        {currentWeather.sys && (
          <>
            <WeatherInfo
              title="Sunrise"
              value={formatTime(currentWeather.sys.sunrise)}
              icon={<WiSunrise/>}
            />
            <WeatherInfo
              title="Sunset"
              value={formatTime(currentWeather.sys.sunset)}
              icon={<WiSunset/>}
            />
          </>
        )}
      </>
    ) : (
      <p>Loading...</p>
    )}
  </>
);
};




export default FetchWeather;
