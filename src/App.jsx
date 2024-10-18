import React, { useEffect, useState } from 'react';
import "./App.css";
import { CiSearch } from "react-icons/ci";
import clear from './assets/clear.png';
import cloud from './assets/cloud.png';
import drizzle from './assets/drizzle.png';
import rain from './assets/rain.png';
import snow from './assets/snow.png';
import humidity from './assets/humidity.png';
import wind from './assets/wind.png';

const App = () => {
  const [weatherData, setWeatherData] = useState(null); 
  const [city, setCity] = useState("Jaipur"); 
  const [inputValue, setInputValue] = useState(''); 

  const search = async (city) => {
    try {
      const url = `https://wttr.in/${city}?format=j1`; 
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data); 
      console.log(data); 
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search(city); 
  }, [city]);

  const handleSearch = () => {
    if (inputValue) {
      setCity(inputValue); 
      setInputValue(''); 
    }
  };

  return (
    <>
      <div className='weather_box'>
        <div className="heading">
          <h1>Weather App</h1>
        </div>
        <div className="weather_search">
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder='Enter City Name' 
          /> 
          <button onClick={handleSearch}><CiSearch /></button> 
        </div>
        {weatherData && (
          <>
            <div className="weather_temp_img">
              <img src={clear} alt="" />
              <h2>{weatherData.current_condition[0].temp_C}&deg;C</h2> 
              <h1>{city}</h1>
            </div>
            <div className="humidity_wind">
              <div className="humidity">
                <div className="humidity_img">
                  <img src={humidity} alt="" />
                </div>
                <p>{weatherData.current_condition[0].humidity}%</p>
                <p>Humidity</p>
              </div>
              <div className="wind_speed">
                <div className="wind_speed_img">
                  <img src={wind} alt="" />
                </div>
                <p>{weatherData.current_condition[0].windspeedKmph} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
