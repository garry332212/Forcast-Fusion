import React from "react";
import { BsWind } from "react-icons/bs";
import { FaCloudMoonRain } from "react-icons/fa";
import { formatTime, dateFormatted } from "../modules/DisplayItemsData";
import { ForecastData } from "./ForcastComponent";
import { celsiusToFahrenheit } from "../modules/modules";
interface forcastProps {
  dt_txt: string;
  name: string;
  country: string;
  temp: number;
  main: string;
  description: string;
  speed: string;
  minMaxData: ForecastData[];
  isCelsius: boolean;
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
  isCelsius,
}) => {
  //!Changing the wather from C° to F°
  const TemperatureDisplay: React.FC<{
    value: number;
    isCelsius: boolean;
    celsiusToFahrenheit: (celsius: number) => number;
  }> = ({ value, isCelsius, celsiusToFahrenheit }) => (
    <p>
      {isCelsius ? value.toFixed(0) : celsiusToFahrenheit(value).toFixed(0)}
      <span className="celsiusFahr">{isCelsius ? "°C" : "°F"}</span>
    </p>
  );

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
          <h1>
            {isCelsius ? temp.toFixed(0) : celsiusToFahrenheit(temp).toFixed(0)}{" "}
            <span>°</span> <span>{isCelsius ? "C" : "F"}</span>
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
              <TemperatureDisplay
                value={forcastHourly.main.temp_min}
                isCelsius={isCelsius}
                celsiusToFahrenheit={celsiusToFahrenheit}
              />
              <TemperatureDisplay
                value={forcastHourly.main.temp_max}
                isCelsius={isCelsius}
                celsiusToFahrenheit={celsiusToFahrenheit}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowForcast;
