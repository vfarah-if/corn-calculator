import React, { useState } from "react";

import "./App.css";

function App() {
  const [cornQuantity, setCornQuantity] = useState(1);
  const costPerBag = 0.25;

  const cornQuantityHandler = (e) => {
    const value = Number.parseInt(e.target.value, 10) || 0;
    console.log("Quantity of corn", value);
    setCornQuantity(value);
  };

  return (
    <div className="App">
      {/* TODO: Extract Header Component */}
      <header className="App-header">
        <h1>River trip adviser</h1>
      </header>
      <div className="App-content">
        {/* TODO: Extract Trip Calculator Component */}        
        <label forhtml="cornQuantity">Corn Quantity:</label>
        <input
          type="number"
          id="cornQuantity"
          name="quantity"
          value={cornQuantity}
          onChange={cornQuantityHandler}
        />
        <br/>
        <label>£ {parseFloat(cornQuantity * costPerBag).toFixed(2)}</label>
      </div>
    </div>
  );
}

export default App;
