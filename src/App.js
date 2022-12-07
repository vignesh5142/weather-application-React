import "./App.css";
import { useState } from "react";

const api = {
  key: "72d690760e3f83721522b446f4520434",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>FIND WEATHER</h1>
        {/* //***************** search box and button *********************************  */}
        
        <div>
          <input
          className="input"
            type="text"
            placeholder="Please Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button 
          onClick={searchPressed}
          className="search-button"
          >Search</button>
        </div>

        {/* //***************** weather details *********************************  */}

        {typeof weather.main !== "undefined" ? (
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;