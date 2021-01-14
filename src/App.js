import React, { useState } from "react";

import "./App.css";

function App() {
  const [cornQuantity, setCornQuantity] = useState(0);
  const [geeseQuantity, setGeeseQuantity] = useState(0);
  const [message, setMessage] = useState('No cargo to take');
  const costPerBag = 0.25;

  // DRY
  const cornQuantityHandler = (e) => {
    const value = Number.parseInt(e.target.value, 10) || 0;
    console.log("Quantity of corn", value);
    setCornQuantity(value);
  };

  // DRY
  const geeseQuantityHandler = (e) => {
    const value = Number.parseInt(e.target.value, 10) || 0;
    console.log("Quantity of geese", value);
    setGeeseQuantity(value);
  };

  const calculateCostOfTrip = () => {    
    if (cornQuantity > 0) {
      return parseFloat(cornQuantity * costPerBag).toFixed(2);
    }
    
    if (geeseQuantity > 0) {
      return parseFloat(geeseQuantity * costPerBag).toFixed(2);
    }

    if (cornQuantity <= 0 && geeseQuantity <= 0) {
      return parseFloat(costPerBag).toFixed(2);
    }
  }

  return (
    <div className="App">
      {/* TODO: Extract Header Component */}
      <header
        className="App-header"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/farm.jpg"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>River trip adviser</h1>
      </header>
      <div className="App-content">
        <form>
          <legend>Plan your trip</legend>
          {/* TODO: Extract Trip Calculator Component */}
          <fieldset>
            <div className="input-group">
              {/* TODO: Extract Quantity Input Component */}
              <label forhtml="cornQuantity">Corn Quantity:</label>
              <input
                type="number"
                id="cornQuantity"
                name="quantity"
                value={cornQuantity}
                onChange={cornQuantityHandler}
              />
            </div>
            <div className="input-group">
              {/* TODO: Extract Quantity Input Component */}
              <label forhtml="geeseQuantity">Geese Quantity:</label>
              <input
                type="number"
                id="geeseQuantity"
                name="quantity"
                value={geeseQuantity}
                onChange={geeseQuantityHandler}
              />
            </div>
          </fieldset>
          <label>£ {calculateCostOfTrip()}</label>
          <p className="user-info">{message}</p>
        </form>
      </div>
    </div>
  );
}

export default App;
