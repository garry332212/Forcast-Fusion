import React from "react";
import WeatherInfo from "./WeatherInfo";
import { GiModernCity } from "react-icons/gi";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { PiThermometerCold, PiFlagDuotone } from "react-icons/pi";
import { TiWeatherStormy } from "react-icons/ti";

import { WeatherData,convertUnixTimestampToTime } from "../modules/modules";

interface CurrentWeatherProps {
  currentWeather: WeatherData | null;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ currentWeather }) => {
  return (
    <>
      {currentWeather && (
        <>
          <WeatherInfo
            title="City"
            value={currentWeather.name}
            icon={<GiModernCity />}
          />

          {currentWeather.sys && (
            <WeatherInfo
              title="Country"
              value={currentWeather.sys.country}
              icon={<PiFlagDuotone />}
            />
          )}
          <WeatherInfo
            title="Temperature"
            value={`${currentWeather.main.temp.toFixed(0)}°C`}
            icon={<TiWeatherStormy />}
          />
          <WeatherInfo
            title="Feels Like"
            value={`${currentWeather.main.feels_like.toFixed(0)}°C`}
            icon={<PiThermometerCold />}
          />
          <WeatherInfo
            title="Humidity"
            value={`${currentWeather.main.humidity}%`}
            icon={<WiHumidity />}
          />
          {currentWeather.sys && (
            <>
              <WeatherInfo
                title="Sunrise"
                value={convertUnixTimestampToTime(currentWeather.sys.sunrise)}
                icon={<WiSunrise />}
              />
              <WeatherInfo
                title="Sunset"
                value={convertUnixTimestampToTime(currentWeather.sys.sunset)}
                icon={<WiSunset />}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default CurrentWeather;
