import { TbSearch } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import FetchWeather from "./FetchWeather";
import React from "react";

//!Lest Fetch The Weather Data
const SearchWeather = () => {
  const [cityName, setCityName] = React.useState("");
  return (
    <div className="leftSideBar">
      <div className="title">
        <h1>Forcast Fusion</h1>
        <TiWeatherPartlySunny className="logoIcon" />
      </div>

      <div className="searchBar">
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />

        <TbSearch className="icon" />
      </div>
      <div className="searchedData">
        <FetchWeather cityName={cityName} />
      </div>

      <div className="copyright">
        <p>
          Created by <span>Gurvinder Singh </span> -
          <span> Using OpenWeatherMap API </span> -
          <span> Created In ReactJS + Typescript </span>-{" "}
          <span>Version 1.0.0</span>
        </p>

        <a
          href="https://github.com/garry332212/Forcast-Fusion"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default SearchWeather;
