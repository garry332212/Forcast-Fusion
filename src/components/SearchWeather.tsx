import React from "react";
import { TbSearch } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { searchedDataApi } from "../modules/DisplayItemsData";
// import logo from "./assets/iconAnimated.gif";

const SearchWeather = () => {
  return (
    <div className="leftSideBar">
      <div className="title">
        <h1>Forcast Fusion</h1>
        <TiWeatherPartlySunny className="logoIcon"/>
      </div>

      <div className="searchBar">
        <input type="text" />
        <TbSearch className="icon" />
      </div>
      <div className="searchedData">
        {searchedDataApi.map((items, index) => (
          <p key={index}>
            <span>{items.title}</span>
            <span>{<items.icon />}</span>
            <span>{items.value}</span>
          </p>
        ))}
      </div>
      <div className="copyright">
        <p>
           Created by <span>Gurvinder Singh </span> -
          <span> Using OpenWeatherMap API  </span> - 
          <span> Created In ReactJS + Typescript </span>
          - <span>Version 1.0.0</span>
        </p>

        <a
          href="https://github.com/garry332212/Forcast-Fusion"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default SearchWeather;
