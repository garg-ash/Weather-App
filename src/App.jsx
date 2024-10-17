import React, { useEffect, useState } from 'react'
import "./App.css"
import { CiSearch } from "react-icons/ci";
import clear from './assets/clear.png'
import cloud from './assets/cloud.png'
import drizzle from './assets/drizzle.png'
import rain from './assets/rain.png'
import snow from './assets/snow.png'
import humidity from './assets/humidity.png'
import wind from './assets/wind.png'

const App = () => {

  const search = async(city)=>{
    try {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`

      const response = await fetch(url);
      const data = await response.json()
      console.log(data);

      

    }catch(error){

    }
  }

  useEffect(()=>{
    search("delhi")
  }, [])

  return (
    <>
    <div className='weather_box'>
      <div className="heading">
        <h1>Weather App</h1>
      </div>
      <div className="weather_search">
        <input type="text" placeholder='Enter City Name' /> 
        <button><CiSearch /></button> 
      </div>
      <div className="weather_temp_img">
        <img src={clear} alt="" />
        <h2>24&deg;C</h2>
        <h1>Mumbai</h1>
      </div>
      <div className="humidity_wind">
      <div className="humidity">
        <div className="humidity_img">
          <img src={humidity} alt="" />
        </div>
           <p>67%</p><br/>
          <p>Humidity</p>
      </div>
      <div className="wind_speed">
        <div className="wind_speed_img">
          <img src={wind} alt="" />
        </div>
        <p>2.06 km/h</p><br/>
        <p>Wind Speed</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default App