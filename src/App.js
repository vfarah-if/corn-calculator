import React from "react";

import TripCalculator from "./components/TripCalculator";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="River trip adviser"/>
      <div className="App-content">
        <TripCalculator></TripCalculator>
      </div>
    </div>
  );
}

export default App;
