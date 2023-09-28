import React, { useState } from "react";
import './Weather.css'
import search_png from '../Assets/search.png';
import clear_png from '../Assets/clear.png';
import cloud_png from '../Assets/cloud.png';
import drizzle_png from '../Assets/drizzle.png';
import humidity_png from '../Assets/humidity.png';
import rain_png from '../Assets/rain.png';
import snow_png from '../Assets/snow.png';
import wind_png from '../Assets/wind.png';

const WeatherApp = () => {

    let api_key = "b1dbb149615d4b00ecd2debc9b56df37";

    const [wicon,setwicon] = useState();

    const search = async () => {
        const ele = document.getElementsByClassName('cityInput');
        if(ele[0].value === '') {
            return 0;
        } else {

        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ele[0].value}&units=Metric&APPID=${api_key}`;

        let response = await  fetch(url);
        if(response.status != 200){
            alert("Please enter correct country");
            ele[0].value = '';
        }else{

        let data = await response.json();
    
        const humidity = document.getElementsByClassName('humidity-percent');
        const wind = document.getElementsByClassName('wind-rate');
        const temp = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location');

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temp[0].innerHTML = data.main.temp + "°c";
        location[0].innerHTML = data.name;

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setwicon(clear_png)
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n")  {
            setwicon(cloud_png)
    }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setwicon(drizzle_png)
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setwicon(drizzle_png)
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setwicon(rain_png)
        } 
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setwicon(rain_png)
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setwicon(snow_png)
        }else {
            setwicon(clear_png)
        }
    }
    }

    return (
        <div className="container">
            <div className="top_bar">
                <input type="text" className="cityInput" placeholder="Search"/>
                <div className="search_Icon" onClick={() => {search()}}>
                    <img src={search_png} alt="" />
                </div>
            </div>

        <div className="weather-image">
            <img src={wicon} alt="" />
        </div>

        <div className="weather-temp">0°c</div>
        <div className="weather-location">Country</div>
        <div className="data-container">

            <div className="element">
                <img src={humidity_png} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">0%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

                <div className="element">
                    <img src={wind_png} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">0 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>

        </div>
        </div>
    )
}

export default WeatherApp;