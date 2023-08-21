import React, { useState } from "react";
import { TbSearch } from "react-icons/tb";
interface SearchWeatherProps {
  onSearch: (city: string) => void;
}

const SearchWeather: React.FC<SearchWeatherProps> = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState<string>("");

  const handleSearch = () => {
    if (searchCity.trim() === "") {
      return;
    }
    onSearch(searchCity);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === "Enter"){
      handleSearch()
    }
  }

  return (
    <>
        <input
        type="text"
        placeholder="Enter city name..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyDown ={handleKeyPress}
      />
      <TbSearch onClick={handleSearch} className="icon" />
    </>
  );
};

export default SearchWeather;
