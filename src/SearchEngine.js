import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState("")
  let [result, setResult] = useState("")


function handleSubmit(event){
    event.preventDefault();
    if (city) {
      setResult(<Weather city={city} />);
    } else {
      setResult(`Please enter a city name.`);
    }
  }
    
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type= "search" placeholder = "Enter a City" onChange ={updateCity} />
      <input type = "submit" value ="search" />
      </form>
        <p>
          {result}
          </p>    
          </div>
      );
      }