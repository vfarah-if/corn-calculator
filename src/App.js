import React, { useState } from "react";

import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(1);
  const costPerBag = 0.25;
  const onQuantityChange = (e) => {
    console.log("Quanity of", e.target.value);
    setQuantity(e.target.value);
  };

  return (

    <div className="App">
      <header className="App-header">
        <h1>Corn calculator</h1>
        <label forhtml="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={onQuantityChange}
        ></input>
        <label>£ {quantity * costPerBag}</label>
      </header>
    </div>
  );
}

export default App;
