
import React from "react";

interface WeatherInfoProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ title, value,icon }) => {
  return (
    <p>
      <span className="titleSpan">{title}</span>
      {icon &&<span className="titleIcon">{icon}</span>}
      <span className="resultSpan">{value}</span>
    </p>
  );
};

export default WeatherInfo;
