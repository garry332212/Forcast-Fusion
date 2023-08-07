import React from "react";
import { BsWind } from "react-icons/bs";
import { FaCloudMoonRain } from "react-icons/fa";
// import forecastImg from "./assets/forecast.gif";
import { formatTime, dateFormatted } from "../modules/DisplayItemsData";
import { ForecastData } from "./ForcastComponent";

interface forcastProps {
  dt_txt: string;
  name: string;
  country: string;
  temp: number;
  main: string;
  description: string;
  speed: string;
  minMaxData: ForecastData[];
}

const ShowForcast: React.FC<forcastProps> = ({
  dt_txt,
  name,
  country,
  temp,
  main,
  description,
  speed,
  minMaxData,
}) => {
  return (
    <div>
      <div className="cityName">
        <h1>{name}</h1>
        <p>{country}</p>
      </div>
      {/*//! Top section for City & Weather Description */}
      <div className="topSectionWeather">
        <div className="forcastDescription">
          <h1 style={{ textTransform: "capitalize" }}>{description}</h1>
          <p>{dateFormatted(dt_txt)}</p>
          <em>
            {speed} Km/h
            <span className="windIcon">
              {" "}
              <BsWind />
            </span>
          </em>
        </div>
        <div className="sideWeatherUnit">
          {/* this span VALUE C should change if handle toggle is In F */}
          <h1>
            {temp.toFixed(0)}
            <span>°</span> <span>C</span>
          </h1>
          <p>{main}</p>
        </div>
      </div>

      {/*//! middle section for Forecasting */}
      <div className="middleForcasting">
        <div className="forecastHeading">
          <h1>Forecast </h1>
          {/* <img src={forecastImg} alt="forecast" /> */}
          <FaCloudMoonRain className="forecastIcon" />
        </div>

        <div className="forcastHourly">
          <div className="heading">
            <p>Time</p>
            <p>Min</p>
            <p>Max</p>
          </div>

          {minMaxData.map((forcastHourly, index) => (
            <div className="minMaxWeatherHorly" key={index}>
              <p>{formatTime(forcastHourly.dt)}</p>
              <p>{forcastHourly.main.temp_min.toFixed(0)}°c</p>
              <p>{forcastHourly.main.temp_max.toFixed(0)}°c</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowForcast;
