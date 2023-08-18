import React from "react";
import ShowForcast from "./ShowForcast";
import { fetchForecast } from "../modules/DisplayItemsData";


//!THE  forcast data props
export interface ForecastData {
  dt_txt: string; // Date of the forecast
  dt: number; // timefor forecast
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
  };

  //* since weather is an array element
  weather: {
    main: string;
    description: string;
  }[];

  wind: {
    speed: string;
  };
}
interface ForcastComponentProps {
  onWeatherConditionChange: (condition: string) => void;
  //setOverlay: (isLoading: boolean) => void;
}

const ForcastComponent: React.FC<ForcastComponentProps> = ({
  onWeatherConditionChange,//setOverlay
}) => {
  const [isCelsius, setIsCelsius] = React.useState(true);
  const [forecastData, setForecastData] = React.useState<ForecastData[]>([]);

  const handleToggle = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  };

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const [forecastWeatherData] = await Promise.all([
            fetchForecast(latitude, longitude),
          ]);
          setTimeout(() => {
            setForecastData(forecastWeatherData);
            if (forecastWeatherData.length > 0) {
              const currentWeatherCondition =
              forecastWeatherData[0].weather[0].main;
            onWeatherConditionChange(currentWeatherCondition);
            }
          },3000);
        } catch (error) {
          console.error(error);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }, [onWeatherConditionChange]);

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

      {forecastData.length > 0 && forecastData[0].dt_txt &&  (
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
  );
};

export default ForcastComponent;
