import React, { useState } from 'react';

function Temperature() {

        const [temperatureValue, setTemperatureValue] = useState(0);
        
      
        const handleTemperatureChange = (event) => {
          const value = event.target.value;
          setTemperatureValue(value);
        };

  return (
    <div className="App">
    <div className="card">
      <div className={`temperature-display-container
       ${temperatureValue >= 18 ? 'red' : 'blue'}`}>

        {temperatureValue}C

      </div>
      <div className="slider-container">
        <input
          type="range"
          className="slider"
          min="0"
          max="50"
          value={temperatureValue}
          onChange={handleTemperatureChange}
        />
      </div>

    </div>
  </div >
  )
}

export default Temperature