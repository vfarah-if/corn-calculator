import React from "react";
import TripCalculator from "./components/TripCalculator";

import "./App.css";

function App() {
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
        <TripCalculator></TripCalculator>
      </div>
    </div>
  );
}

export default App;
