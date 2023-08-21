import React from "react";
import ShowForcast from "./ShowForcast";
// import loadingImg from "./assets/Loading.gif";
import { ForecastData } from "../modules/modules";
//!THE  forcast data props

interface ForcastComponentProps {
  forecastData: ForecastData[];
  onWeatherConditionChange: (condition: string) => void;
}

const ForcastComponent: React.FC<ForcastComponentProps> = ({
  onWeatherConditionChange,
  forecastData
}) => {
  const [isCelsius, setIsCelsius] = React.useState(true);
 

  const handleToggle = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  };

  React.useEffect(() => {
    
      if (forecastData && forecastData.length > 0) {
        const currentWeatherCondition = forecastData[0].weather[0].main;
        onWeatherConditionChange(currentWeatherCondition);
      }
  
  }, [forecastData, onWeatherConditionChange]);

 
  return (
    <>
     
        <div className="forcastContainer">
          {/*//! Toggle Beteen C & F units */}
          <div className="temperatureToggle">
            <p className={isCelsius ? "active" : ""}>°C</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={!isCelsius}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
            <p className={!isCelsius ? "active" : ""}>°F</p>
          </div>
          {forecastData.length > 0 && forecastData[0].dt_txt && (
            <ShowForcast
              dt_txt={forecastData[0].dt_txt}
              name="Auckland"
              country="NZ"
              temp={forecastData[0].main.temp}
              main={forecastData[0].weather[0].main}
              description={forecastData[0].weather[0].description}
              speed={forecastData[0].wind.speed}
              minMaxData={forecastData.slice(0, 4)}
              isCelsius={isCelsius}
            />
          )}
        </div>
      
    </>
  );
};

export default ForcastComponent;
