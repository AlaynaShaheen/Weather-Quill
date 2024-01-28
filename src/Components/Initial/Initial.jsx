import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import './Initial.css';
import drizzle from '../Assets/drizzle.png';
import '../WeatherApp/WeatherApp.css';
import WeatherApp from '../WeatherApp/WeatherApp';
const Initial = () => {
    const navigate=useNavigate();
    function handleClick(){
      navigate("/weatherapp");
    }
  return (
   
        <div className='container'>
      <div className='weather-img'>
        <img src={drizzle}/>
      </div>
      <div className='title'><p className='weather'>Weather</p><p className='quill'>Quill</p></div>
      <div class='but'><button className='getstarted' onClick={handleClick}>Get started</button></div>
      
    </div>
  )
}

export default Initial

