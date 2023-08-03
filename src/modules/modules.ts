export const api_key = "0cc86d16bf572f78cdc96c096c7627e5";
export const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

//corresponding type declarations



//!Convert unix timestamp to human readable time from the api
export const convertUnixTimestampToTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}`;
};

