import React, { useState, useEffect } from "react";
import "./style/index.css";

const TripCalculator = ({ initialCornQuantity, initialGeeseQuantity }) => {
  // Put consts or functions or state
  const [cornQuantity, setCornQuantity] = useState(initialCornQuantity || 0);
  const [geeseQuantity, setGeeseQuantity] = useState(initialGeeseQuantity || 0);
  const [message, setMessage] = useState("No cargo to take");
  const [tripCount, setTripCount] = useState(1);
  const costPerTrip = 0.25;

  useEffect(() => {
    calculateMessage();
  }, [cornQuantity, geeseQuantity, initialGeeseQuantity, initialCornQuantity]);

  useEffect(() => {
    if (cornQuantity === 1 && geeseQuantity === 1) {
      return setTripCount(cornQuantity + geeseQuantity);
    }

    if (cornQuantity >= 1 && geeseQuantity >= 1) {
      return setTripCount(0);
    }

    if (cornQuantity <= 0 && geeseQuantity <= 0) {
      return setTripCount(1);
    }
    return setTripCount(Math.max(cornQuantity, 0) + Math.max(geeseQuantity, 0));
  }, [cornQuantity, geeseQuantity, initialGeeseQuantity, initialCornQuantity]);
  
  const calculateMessage = () => {
    if (cornQuantity === 0 && geeseQuantity === 0) {
      return setMessage(`No cargo to take`);
    }

    if (
      (cornQuantity > 1 && geeseQuantity > 0) ||
      (cornQuantity > 0 && geeseQuantity > 1)
    ) {
      return setMessage(`Do not make trip, corn is at risk`);
    }

    if (geeseQuantity === cornQuantity && geeseQuantity >= 1) {
      return setMessage(`take the corn first`);
    }

    if (geeseQuantity > 0) {
      return setMessage(
        `take in this order : ${geeseQuantity === 1 ? "goose" : "geese"}`
      );
    }

    if (cornQuantity > 0) {
      return setMessage(
        `take in this order :  ${cornQuantity === 1 ? "corn" : "corns"}`
      );
    }
  };
  const calculateCostOfTrip = () => {
    if (
      (cornQuantity > 1 && geeseQuantity > 0) ||
      (cornQuantity > 0 && geeseQuantity > 1)
    ) {
      return parseFloat(0).toFixed(2);
    }

    if (cornQuantity > 0) {
      return parseFloat(cornQuantity * costPerTrip).toFixed(2);
    }

    if (geeseQuantity > 0) {
      return parseFloat(geeseQuantity * costPerTrip).toFixed(2);
    }

    if (cornQuantity <= 0 && geeseQuantity <= 0) {
      return parseFloat(costPerTrip).toFixed(2);
    }
  };

  // DRY
  const cornQuantityHandler = (e) => {
    let value = Number.parseInt(e.target.value, 10) || 0;
    console.log("Quantity of corn", value);
    if (value < 0) {
      value = 0;
    }
    setCornQuantity(value);
  };

  // DRY
  const geeseQuantityHandler = (e) => {
    let value = Number.parseInt(e.target.value, 10) || 0;
    console.log("Quantity of geese", value);
    if (value < 0) {
      value = 0;
    }
    setGeeseQuantity(value);
  };

  return (
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
            min={0}
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
            min={0}
          />
        </div>
      </fieldset>
      <label>£ {calculateCostOfTrip()}</label>
      <p className="user-info">{message}</p>
      <p className="user-info">Trip Count: {tripCount}</p>
    </form>
  );
};

export default TripCalculator;
