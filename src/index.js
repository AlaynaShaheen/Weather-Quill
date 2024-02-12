import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import WeatherApp from './Components/WeatherApp/WeatherApp';
import Initial from './Components/Initial/Initial';
const router=createHashRouter(
    createRoutesFromElements(<>
      <Route path='/' element={<App/>}/>
         <Route path='/weatherapp' element={<WeatherApp/>}/>
     </>
    ))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
{/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
</React.StrictMode>*/}

