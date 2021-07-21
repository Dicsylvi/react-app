import React from "react";
import SearchEngine from "./SearchEngine";


import './App.css';

function App() {
  return (
    <div  className="App">
      <header className="App-header">
     <h1>Weather App</h1>
           <SearchEngine  />
 </header>
 <small>
     <div className="App-footer">
     <a href="https://github.com/Dicsylvi/react-app">
       Open-source code, 
               </a>
   👩🏼‍💻 Sylvia.
    </div>
    </small>
    </div>
  );
}

export default App;
