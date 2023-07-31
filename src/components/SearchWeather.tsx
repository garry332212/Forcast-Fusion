import React, { useState } from "react";
import { ForecastData, WeatherData } from "./WeatherComponent";
import axios from "axios";
import { api_Endpoint, api_key } from "../modules";

interface WeatherProps {
  fetchForecast: (lat: number, lon: number) => Promise<ForecastData[]>;
}

const SearchWeather: React.FC<WeatherProps> = ({ fetchForecast }) => {
  const [city, setCity] = useState<string>("");
  const [searchedWeather, setSearchedWeather] = useState<WeatherData | null>(
    null
  );
  const [searchedForecastData, setSearchedForecastData] = useState<
    ForecastData[]
  >([]);

  const handleSearch = async () => {
    if (city.trim() === "") return;

    try {
      const url = `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`;
      const response = await axios.get(url);
      setSearchedWeather(response.data);
      const forecastResponse = await fetchForecast(
        response.data.coord.lat,
        response.data.coord.lon
      );
      setSearchedForecastData(forecastResponse);
    } catch (error) {
      console.error(error);
      setSearchedWeather(null);
      setSearchedForecastData([]);
    }
  };
  return (
    <div>
      <h2>Search Weather for a City:</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h2>Search Result for {searchedWeather?.name} - {searchedWeather?.sys.country}</h2>
      {searchedWeather ? (
        <>
          <h1>City: {searchedWeather.name}</h1>
          <h2>Temperature: {searchedWeather.main.temp.toFixed(0)} °C</h2>
          <h3>Feels Like: {searchedWeather.main.feels_like.toFixed(0)} °C</h3>
          <em>Wind💨 {searchedWeather.wind.speed.toFixed(0)} km/h</em>
        </>
      ) : (
        <p>No data found for the entered city.</p>
      )}
      {/*//! below is the forcast for searched city */}
      {searchedForecastData.length > 0 ? (
        <>
          {searchedForecastData.slice(0, 5).map((forecast) => (
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
        <p>No forecast data found for the entered city.</p>
      )}
    </div>
  );
};

export default SearchWeather;
