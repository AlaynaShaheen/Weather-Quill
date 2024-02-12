import WeatherApp from './Components/WeatherApp/WeatherApp.jsx';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Initial from './Components/Initial/Initial.jsx';
import { Outlet } from 'react-router-dom';
export default function App(){
  return (
    <div>
         {/* <Routes>
            <Route path="/" element={<Initial/>}/>
            <Route path="/weatherapp" element={<WeatherApp/>}/>
          </Routes>*/} 
          <Initial/>
    </div>

  );
}
