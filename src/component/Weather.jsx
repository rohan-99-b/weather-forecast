import useWeather from "../utils/useWeather";
import { useEffect, useState } from "react";
import { FahrenheitToCelsius } from "@ilihub/fahrenheit-to-celsius";


const Weather = () => {
  const [city, setCity] = useState("");
  const [param, setParam] = useState(null);
  const weatherData = useWeather(param);
  console.log(weatherData, "weatherData");
  const getWeatherDetails = (city) => {
    setParam(city);
  };
  return (
    <div>
      <div>
        <input
          className="border border-solid border-black"
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setParam(null);
          }}
          placeholder="Please enter your city"
        />
        <button
          onClick={() => getWeatherDetails(city)}
          className="px-4 rounded-lg bg-blue-600"
        >
          Search
        </button>
      </div>
      <div>
        {weatherData?.cod === 200 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">Co-ordination</td>
                  <td className="py-2 px-4">
                    Latituede: {weatherData?.coord?.lat}, Longitude:{" "}
                    {weatherData?.coord?.lon}
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  {weatherData?.weather?.map((value, index) => (
                    <div>
                      <td key={index} className="py-2 px-4">
                        Weather
                      </td>
                      <td  className="py-2 px-4 w-full">{value.description} for next {value.icon}</td>
                      </div>
                  ))}
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">Temp.:{FahrenheitToCelsius(weatherData.main.temp)}</td>
                  <td className="py-2 px-4">humidity:{weatherData.main.humidity}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">Co-ordination</td>
                  <td className="py-2 px-4">
                    Latituede: {weatherData?.coord?.lat}, Longitude:{" "}
                    {weatherData?.coord?.lon}
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">Co-ordination</td>
                  <td className="py-2 px-4">
                    Latituede: {weatherData?.coord?.lat}, Longitude:{" "}
                    {weatherData?.coord?.lon}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
