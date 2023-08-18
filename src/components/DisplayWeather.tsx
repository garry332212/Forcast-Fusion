import React from "react";
import { WeatherMainContainer } from "../CSS/styles.modules";
import ForcastComponent from "./ForcastComponent";
import LeftWeather from "./LeftWeather";
import loadingImg from "./assets/Loading.gif";



const DisplayWeather = () => {
  const [weatherCondition, setWeatherCondition] = React.useState("");
  const [loading, setLoading] = React.useState(false);

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

 
  React.useEffect(()=>{
    setInterval(()=>{
      setLoading(true)
    },1000)
  })


  return (
    <WeatherMainContainer>
      {loading ? (
        <div className="container">
          <div className={getBackgroundClassFromWeather(weatherCondition)}>
            <div className="splitWeather">
              <LeftWeather />
              <div className="rightSideBar">
                <ForcastComponent
                  onWeatherConditionChange={setWeatherCondition}
                  //setOverlay={setLoading} // Pass the loading state update function
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loadingWeather">
          <img src={loadingImg} alt="img" />
          <p>Loading Forcast</p>
        </div>
      )}
    </WeatherMainContainer>
  );
};

export default DisplayWeather;
