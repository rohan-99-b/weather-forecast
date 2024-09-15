import { useState } from "react";
import { useEffect } from "react";
import { WEATHER_URL, API_KEY } from "./constants";

const useWeather = (city) => {
  console.log(city, "checkcity");
  const [weatherDetails, setWeatherDetails] = useState(null);

  useEffect(() => {
    fetchWeatherDetails();
  }, [city]);

  const fetchWeatherDetails = async () => {
    if (city === null) {
      return setWeatherDetails(null);
    }
    const data = await fetch(WEATHER_URL + `q=${city}&` + API_KEY);
    const json = await data.json();
    setWeatherDetails(json);
  };
  return weatherDetails;
};

export default useWeather;
