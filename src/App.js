import React from 'react';

const api = {
  key: "50bb2091655ad1fec8ff77fa8a9b54ae",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
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

  return (
    <div className="App warm">
      <main>
        <div className="search-box">
          <input type="text"
          className="search-bar"
          placeholder="Search..."
          />           
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div> 
        </div>
      </main>
    </div>
  );
}

export default App;
