import { TiWeatherPartlySunny } from "react-icons/ti";
import CurrentWeather from "./CurrentWeather";
import { WeatherData} from "../modules/modules";
import SearchWeather from "./SearchWeather";
import React from "react";

interface CurrentWeatherProps {
  currentWeatherProp: WeatherData | null;
  onSearch: (city: string) => void;
}

//!Lest Fetch The Weather Data
const LeftWeather: React.FC<CurrentWeatherProps> = ({ currentWeatherProp,onSearch }) => {

 
  return (
    <div className="leftSideBar">
      <div className="title">
        <h1>Forcast Fusion</h1>
        <TiWeatherPartlySunny className="logoIcon" />
      </div>

      <div className="searchBar">
        <SearchWeather onSearch={onSearch}/>
      </div>

      <div className="searchedData">
        <CurrentWeather currentWeather={currentWeatherProp} />
      </div>

      <div className="copyright">
        <p>
          Created by <span>Guri </span> -<span> Using OpenWeatherMap API </span>{" "}
          -<span> Created In ReactJS + Typescript </span>-{" "}
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

export default LeftWeather;
