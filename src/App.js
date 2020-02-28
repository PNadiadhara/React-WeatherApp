import React from 'react';

const api = {
  key: "50bb2091655ad1fec8ff77fa8a9b54ae",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text"
          className="search-bar"
          placeholder="Search..."
          /> 
          
          
        </div>
      </main>
    </div>
  );
}

export default App;
