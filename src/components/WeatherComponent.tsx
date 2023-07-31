// WeatherComponent.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchWeather from "./SearchWeather";
import { api_Endpoint, api_key } from "../modules";

//!THE DATA Available to fetch from the api
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

//!Convert unix timestamp to human readable time from the api
export const convertUnixTimestampToTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}`;
};

const WeatherComponent = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );

  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  useEffect(() => {
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
    console.log(response.data);
    return response.data;
  };

  //!function to fetch the default location forcast
  const fetchForecast = async (
    lat: number,
    lon: number
  ): Promise<ForecastData[]> => {
    const url = `${api_Endpoint}forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    console.log(response.data);
    return response.data.list;
  };

  return (
    <div>
      <h2>Your Current Location Weather:</h2>
      {currentWeather ? (
        <>
          <h1>
            City: {currentWeather.name} - {currentWeather.sys.country}
          </h1>
          <h2>Temperature: {currentWeather.main.temp.toFixed(0)} °C</h2>
          <h3>Feels Like: {currentWeather.main.feels_like.toFixed(0)} °C</h3>

          <h4>
            Sunrise: {convertUnixTimestampToTime(currentWeather.sys.sunrise)} AM
          </h4>
          <h4>
            Sunset: {convertUnixTimestampToTime(currentWeather.sys.sunset)} PM
          </h4>
          <p>
            Timezone: GMT+ {convertUnixTimestampToTime(currentWeather.timezone)}
          </p>
          <em>Wind {currentWeather.wind.speed.toFixed(0)} kmh</em>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <h2>Weather Forecast for Your Current Location:</h2>
      {forecastData && forecastData.length > 0 ? (
        <>
          {forecastData.slice(0, 5).map((forecast) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px",
              }}
              key={forecast.dt_txt}
            >
              {forecast.dt_txt}: {forecast.main.temp} °C
              {/* Access the description from the weather array */}
              <span style={{ color: "red" }}>
                {forecast.weather[0].description}
              </span>
              <span style={{ color: "blue" }}>{forecast.wind.speed} km/h</span>
            </div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}

      <SearchWeather fetchForecast={fetchForecast} />
    </div>
  );
};

export default WeatherComponent;
