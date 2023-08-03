import { GiModernCity } from "react-icons/gi";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { PiThermometerCold } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";

//TODO : replace the hardcoded data with the API dATA

//!for searched items
export const searchedDataApi = [
  {
    title: "Auckland, NZ",
    icon: GiModernCity,
    value: "18°C",
  },
  {
    title: "Feels Like",
    icon: PiThermometerCold,
    value: "13°C",
  },
  {
    title: "Humidity",
    icon: WiHumidity,
    value: "61",
  },
  {
    title: "Sunrise",
    icon: WiSunrise,
    value: "6:30 AM",
  },
  {
    title: "Sunset",
    icon: WiSunset,
    value: "5:30 PM",
  },
  {
    title: "Local Time",
    icon: CiClock2,
    value: "05:30 AM",
  },
];


//!for minimum and maximum forcast values

export const forcastHourly = [
{time:"9 AM", min: "7°", max:"12°"},
{time:"12 PM", min: "10°", max:"18°"},
{time:"3 PM", min: "8°", max:"13°"},
{time:"6 PM", min: "6°", max:"11°"},
{time:"9 PM", min: "5°", max:"9°"},
]

//!for the bottom section with Major Cities

export const citiesTemprature = [
  {name: "Wellington", temp: "15°"},
  {name: "Hamilton", temp: "17°"},
  {name: "Christchurch", temp: "10°"},
  {name: "Queenstown", temp: "8°"},
  {name: "Auckland", temp: "12°"},
]