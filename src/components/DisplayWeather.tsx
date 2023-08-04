import React from "react";
import { WeatherMainContainer } from "../CSS/styles.modules";
import ForcastComponent from "./ForcastComponent";
import SearchWeather from "./LeftWeather";

/*!this Component  Is Parent Component of*/ //*!<SearchWeather/> & <ForcastComponent />

const DisplayWeather = () => {
  return (
    <WeatherMainContainer>
      <div className="container">
        <div className="weatherContainer">
          <div className="splitWeather">
           <SearchWeather />
            <div className="rightSideBar">
              <ForcastComponent />
            </div>
          </div>
        </div>
      </div>
    </WeatherMainContainer>
  );
};

export default DisplayWeather;
