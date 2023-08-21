import React from "react";
import { WeatherMainContainer } from "../CSS/styles.modules";
import ForcastComponent from "./ForcastComponent";
import LeftWeather from "./LeftWeather";
import loadingImg from "./assets/Loading.gif";
import {
  WeatherData,
  fetchCurrentWeather,
  fetchForecast,
  fetchWeatherData,
  ForecastData,
} from "../modules/modules";

const DisplayWeather = () => {
  const [weatherCondition, setWeatherCondition] = React.useState("");
  const [currentWeather, setCurrentWeather] =
    React.useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = React.useState<ForecastData[]>([]);
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
      case "Mist":
        return "foggy-bg";
      default:
        return "default-bg"; // Or any default background class
    }
  };

  React.useEffect(() => {
    // Get user's current location weather and forecast
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        Promise.all([
          fetchCurrentWeather(latitude, longitude),
          fetchForecast(latitude, longitude),
        ]).then(([currentWeatherData, forecastData]) => {
          setCurrentWeather(currentWeatherData);
          setForecastData(forecastData);
          setLoading(true);
        });
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );
  }, []);

  const handleSearch = async (city: string) => {
    try {
      const { currentWeatherData, forecastList } = await fetchWeatherData(city);
      setCurrentWeather(currentWeatherData);
      setForecastData(forecastList);
    } catch (error) {
      console.error("Unable To Find Any Results");
    }
  };
  return (
    <WeatherMainContainer>
      <div className="container">
        <div className={getBackgroundClassFromWeather(weatherCondition)}>
          <div className="splitWeather">
            <LeftWeather
              currentWeatherProp={currentWeather}
              onSearch={handleSearch}
            />
            <div className="rightSideBar">
              {loading ? (
                <ForcastComponent
                  onWeatherConditionChange={setWeatherCondition}
                  forecastData={forecastData}
                />
              ) : (
                <div className="loadingWeather">
                  <img src={loadingImg} alt="img" />
                  <p>Loading Forcast</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </WeatherMainContainer>
  );
};

export default DisplayWeather;
