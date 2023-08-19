import React from "react";
import { WeatherMainContainer } from "../CSS/styles.modules";
import ForcastComponent from "./ForcastComponent";
import LeftWeather from "./LeftWeather";


const DisplayWeather = () => {
  const [weatherCondition, setWeatherCondition] = React.useState("");

  const getBackgroundClassFromWeather = (weather: string) => {
    switch (weather) {
      case "Rain":
      case "Drizzle":
        return "rainy-bg";
      case "Clear":
        return "sunny-bg";
      case "Clouds":
        return "cloudy-bg";
      // Add more cases for other weather conditions...
      default:
        return "default-bg"; // Or any default background class
    }
  };

  return (
    <WeatherMainContainer>
      <div className="container">
        <div className={getBackgroundClassFromWeather(weatherCondition)}>
          <div className="splitWeather">
            <LeftWeather />
            <div className="rightSideBar">
              <ForcastComponent
                onWeatherConditionChange={setWeatherCondition}
              />
            </div>
          </div>
        </div>
      </div>
    </WeatherMainContainer>
  );
};

export default DisplayWeather;
