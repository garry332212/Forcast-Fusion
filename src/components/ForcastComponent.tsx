import React from "react";
import { BsWind } from "react-icons/bs";
import { FaCloudMoonRain } from "react-icons/fa";
// import forecastImg from "./assets/forecast.gif";
import { forcastHourly, citiesTemprature } from "../modules/DisplayItemsData";
const ForcastComponent = () => {
  const [isCelsius, setIsCelsius] = React.useState(true); // Initial state is Celsius

  const handleToggle = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  };

  return (
    <div className="forcastContainer">
      {/*//! Toggle Beteen C & F units */}
      <div className="temperatureToggle">
        <p className={isCelsius ? "active" : ""}>°C</p>
        <label className="switch">
          <input type="checkbox" checked={!isCelsius} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
        <p className={!isCelsius ? "active" : ""}>°F</p>
      </div>

      {/*//! Top section for City & Weather Description */}
      <div className="cityName">
        <h1>Auckland</h1>
        <p>Nz</p>
      </div>

      <div className="topSectionWeather">
        <div className="forcastDescription">
          <h1>Heavy Rain</h1>
          <p>Friday, 20th, 2023</p>
          <em>
            Wind 20 km/h{" "}
            <span className="windIcon">
              {" "}
              <BsWind />
            </span>
          </em>
        </div>
        <div className="sideWeatherUnit">
          {/* this span VALUE C should change if handle toggle is In F */}
          <h1>
            15 <span>°</span> <span>C</span>
          </h1>
          <p>Rain</p>
        </div>
      </div>
      {/* {isCelsius ? 'Display Celsius Weather' : 'Display Fahrenheit Weather'} */}

      {/*//! middle section for Forecasting */}
      <div className="middleForcasting">
        <div className="forecastHeading">
          <h1>Forecast </h1>
          {/* <img src={forecastImg} alt="forecast" /> */}
          <FaCloudMoonRain className="forecastIcon" />
        </div>

        <div className="forcastHourly">
          <div className="labels">
            <div className="heading">
              <p>Hours</p>
              <p>Min</p>
              <p>Max</p>
            </div>

            {forcastHourly.map((forcast, index) => (
              <div className="minMaxWeatherHorly" key={index}>
                <p>{forcast.time}</p>
                <p>{forcast.min}</p>
                <p>{forcast.max}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*//! Bottom Section for Major Cities Weather */}

      <div className="bottomSection">
        {citiesTemprature.map((cities, index) => (
          <div className="citiesInfo" key={index}>
            <p>{cities.temp}</p>
            <p>{cities.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForcastComponent;
