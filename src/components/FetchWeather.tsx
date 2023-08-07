
import React from "react";

import WeatherInfo from "./WeatherInfo";
import { GiModernCity } from "react-icons/gi";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { PiThermometerCold,PiFlagDuotone } from "react-icons/pi";
import { TiWeatherStormy } from "react-icons/ti";
import { fetchCurrentWeather, formatTime } from './../modules/DisplayItemsData';

export interface WeatherData {
  name: string;
  //*fetches as an object
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  //*fetches as an object
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  wind: {
    speed: number;
  };

  weather: {
    main: string;
    description: string;
  }[];
}

const FetchWeather = () => {
  const [currentWeather, setCurrentWeather] =
    React.useState<WeatherData | null>(null);

  React.useEffect(() => {
    // Get user's current location weather and forecast
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        Promise.all([
          fetchCurrentWeather(latitude, longitude),
        ]).then(([currentWeatherData]) => {
          setCurrentWeather(currentWeatherData);
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);




  return (
    <>
    {currentWeather ? (
      <>
        <WeatherInfo title="City" value={currentWeather.name} icon={<GiModernCity/>}/>

        {currentWeather.sys && (
          <WeatherInfo title="Country" value={currentWeather.sys.country} icon={<PiFlagDuotone/>}/>
        )}
        <WeatherInfo
          title="Temperature"
          value={`${currentWeather.main.temp.toFixed(0)}°C`}
          icon={<TiWeatherStormy/>}
          
        />
        <WeatherInfo
          title="Feels Like"
          value={`${currentWeather.main.feels_like.toFixed(0)}°C`}
          icon={<PiThermometerCold/>}
        />
        <WeatherInfo
          title="Humidity"
          value={`${currentWeather.main.humidity}%`}
          icon={<WiHumidity/>}
        />
        {currentWeather.sys && (
          <>
            <WeatherInfo
              title="Sunrise"
              value={formatTime(currentWeather.sys.sunrise)}
              icon={<WiSunrise/>}
            />
            <WeatherInfo
              title="Sunset"
              value={formatTime(currentWeather.sys.sunset)}
              icon={<WiSunset/>}
            />
          </>
        )}
      </>
    ) : (
      <p>Loading...</p>
    )}
  </>
);
};




export default FetchWeather;
