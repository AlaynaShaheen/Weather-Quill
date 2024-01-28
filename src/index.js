import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import WeatherApp from './Components/WeatherApp/WeatherApp';
import Initial from './Components/Initial/Initial';
const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
         <Route path='/weatherapp' element={<WeatherApp/>}/>
    </Route>
  ))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

