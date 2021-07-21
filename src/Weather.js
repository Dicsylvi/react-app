import React, { useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";

export default function Weather(props) {
  let [WeatherUpdate, setWeatherUpdate] = useState(null);

  function showWeatherUpdate(response) {
    setWeatherUpdate(response.data.main);
  }
  let apiKey = "d8d17f84ce9aabb3a7583207cdad5dd3"
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherUpdate);

  if (WeatherUpdate) {
    return (
    < ul>
         <li> Temperature:{Math.round(WeatherUpdate.temp)}°C </li>
        <li> Humidity:{WeatherUpdate.humidity} </li>
        <li> Max-Temp:{WeatherUpdate.temp_max}</li>
        <li> Min-Temp:{WeatherUpdate.temp_min}  </li>
        <li> Feels like:{WeatherUpdate.feels_like} </li>
      </ul>
    );
  } else {
    return (
      <Loader type="Grid" 
        color="#ea6e4b" 
        height={80}      
       width={80} />
     );
   }
}