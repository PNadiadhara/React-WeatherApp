import React, {useState} from 'react';

const api = {
  key: "50bb2091655ad1fec8ff77fa8a9b54ae",
  base: "http://api.openweathermap.org/data/2.5/"
}



function App() {

  function BGUpdate(weather) {
    if (!weather) {
      return 'App warm'
    } else {

      switch (true) {
        case (weather.temp >= 70):
          return 'App warm'
        case (weather.temp >= 40):
          return 'App'
        default:
          return 'App cold'
      }
    }
  
  
  }

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  //Event arrow function
  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=Imperial&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  // using native DateObject
  const dateBuilder = (d) => {
    let months = ["January","February","March","April","May","June","July",
      "August","September","October","November","December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()]; // returns 0 .. 6
    let date = d.getDate(); // returns date 1 .. 31 
    let month = months[d.getMonth()] // returns 0 .. 11
    let year = d.getFullYear();

  

  return `${day} ${date} ${month} ${year}`
}

  /* this was the original code, updated to function for ease to read and upgrade 
  <div className={(typeof weather.main != "undefined") ? (
      (weather.main.temp > 70) ? 'App warm' : (weather.main.temp > 40) ? 'App' : 'App Cold') 
      : 'App cold'}> */
  return (
    <div className={BGUpdate(weather.main)}>
      <main>
        
        <div className="search-box">
          <input type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value = {query}
          onKeyPress={search}
          />           
        </div>

        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div> 
        </div>

        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp) + '°F'}
          </div>
          <div className="weather">
            {weather.weather[0].main}
          </div>
        </div>
        </div>
          ) : ('')}
      </main>
    </div>
  );
}

export default App;
