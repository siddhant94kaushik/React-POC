// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [temperatureValue, setTemperatureValue] = useState(0);
  // const [temperatureColor, setTemperatureColor] = useState('blue');

  

  // const handleIncrementTemp = () => {
    
  //   let limitTemperatureValue = temperatureValue + 1;
  //   setTemperatureValue(limitTemperatureValue);

  //   // if(limitTemperatureValue >= 18){
  //   //   setTemperatureColor("red");
  //   // }
    
  // }

  // const handleDecrementTemp = () => {
    
  //   let limitTemperatureValue = temperatureValue - 1;
  //   setTemperatureValue(limitTemperatureValue);
  // }

  const handleTemperatureChange = (event) => {
    const value = event.target.value;
    setTemperatureValue(value);
  };

  // const temperatureColor = temperatureValue >= 18 ? 'red' : 'blue';

 // code optimisation point below :--
 //  single place for temperature call.(use it in template).
 //  slider use for it.
 //  function ek hi call on both the button call, identify which function to call conditionlly.
//  Above all are optimized........


  return (
    <div className="App">
      <div className="card">
        <div className={`temperature-display-container
         ${temperatureValue >= 18 ? 'red' : 'blue'}`}>

          {temperatureValue}C

        </div>
        {/* <div className="button-container">
          <button type="button" className="btn btn-outline-info" onClick={handleIncrementTemp}>+</button>
          <button type="button" className="btn btn-outline-info" onClick={handleDecrementTemp}>-</button>
        </div> */}

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
  );
}

export default App;
