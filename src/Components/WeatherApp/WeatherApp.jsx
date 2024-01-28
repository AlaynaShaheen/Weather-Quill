import React from 'react';
import { useState } from 'react';
import './WeatherApp.css';
import rain from '../Assets/rain.png';
import drizzle from '../Assets/drizzle.png';
import light_rain from '../Assets/light_rain.png';
import night from '../Assets/night.png';
import cloudy from '../Assets/partly-cloudy.png';
import humidity from '../Assets/humidity.png'
import search from '../Assets/search.png';
import snow from '../Assets/snow.png';
import sunny from '../Assets/sunny.png';
import windy from '../Assets/windy.png';
import thunder from '../Assets/thunder.png';
import feelslike from '../Assets/feelslike.png';
const WeatherApp = () => {
  let api_key="38eb6e4df1d830270a50fefb4d4f3e4e";
  const [wicon,setwicon]=useState(cloudy);
  
  const searc=async ()=>{
        const element=document.getElementsByClassName('cityInput');
        if(element[0].value==="")
        {
          return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${ api_key}&units=metric`;
        try{
          let response=await fetch(url);
          let data=await response.json();
        const humidity=document.getElementsByClassName("humidity-percent");
        const wind=document.getElementsByClassName("wind-rate");
        const temp=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("weather-location");
        const feels=document.getElementsByClassName("feelslike");
        console.log(data.name)
        // wind[0].innerHTML=data.wind.speed;
        // temp[0].innerHTML=data.main.temp;
        // location[0].innerHTML=data.name;
        // humidity[0].innerHTML=data.main.humidity;
        if (data.wind && data.wind.speed !== undefined) {
          wind[0].innerHTML = Math.floor(data.wind.speed)+" km/hr";
      } else {
          wind[0].innerHTML = 'N/A';
      }

      if (data.main && data.main.temp !== undefined) {
          temp[0].innerHTML = Math.floor(data.main.temp)+"°C";
      } else {
          temp[0].innerHTML = 'N/A';
      }

      if (data.name !== undefined) {
          location[0].innerHTML = data.name;
      } else {
          location[0].innerHTML = 'N/A';
      }

      if (data.main && data.main.humidity !== undefined) {
          humidity[0].innerHTML = data.main.humidity+" %";
      } else {
          humidity[0].innerHTML = 'N/A';
      }
      
      if (data.main && data.main.feels_like !== undefined) {
        feels[0].innerHTML = Math.floor(data.main.feels_like)+"°C";
    } else {
        feels[0].innerHTML = 'N/A';
    }
    
      if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
       {
    setwicon(sunny);
       }
       else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
       {
        setwicon(cloudy);
       }
       else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
       {
        setwicon(cloudy);
       }
       else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
       {
        setwicon(cloudy);
       }
       else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
       {
        setwicon(light_rain);
       }
       else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
       {
        setwicon(drizzle);
       }
       else if(data.weather[0].icon==="11d" || data.weather[0].icon==="11n")
       {
        setwicon(thunder);
       }
       else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
       {
        setwicon(snow);
       }
       else{
        setwicon(sunny);
       }
       if(data.weather[0].icon==="01d" || data.weather[0].icon==="02d" || data.weather[0].icon==="03d" || data.weather[0].icon==="04d" || data.weather[0].icon==="09d" || data.weather[0].icon==="10d" || data.weather[0].icon==="11d" || data.weather[0].icon==="13d")
       {
             
       }
  } catch (error) {
      console.error('Error fetching weather data:', error);
  }
  
    }
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeHolder='search'/>
              <div className='search' onClick={()=>{searc()}}>
                <img src={search} alt=""/>
              </div>
        </div>
        <div className='weather-image'>
          <img src={wicon} alt=""/>
        </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
          <div className='element'>
            <img src={humidity} alt='' className='icon'/>
            <div className='data'>
              <div className='humidity-percent'>64%</div>
              <div className='text'>Humidity</div>
            </div>
          </div>
          <div className='element'>
            <img src={windy} alt='' className='icon'/>
            <div className='data'>
              <div className='wind-rate'>4 km/hr</div>
              <div className='text'>Wind Speed</div>
            </div>
          </div>
        
        <div className='element'>
            <img src={feelslike} alt='' className='icont'/>
            <div className='data'>
              <div className='feelslike'>26°C</div>
              <div className='text'>Feels like</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherApp
