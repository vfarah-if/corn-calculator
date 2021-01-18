import React, { useState, useEffect } from "react";

import QuantityInput from "../QuantityInput";
import "./style/index.css";

const TripCalculator = ({ initialCornQuantity, initialGeeseQuantity }) => {
  // Put consts or functions or state
  const [cornQuantity, setCornQuantity] = useState(initialCornQuantity || 0);
  const [geeseQuantity, setGeeseQuantity] = useState(initialGeeseQuantity || 0);
  const [message, setMessage] = useState("no cargo to take");
  const [tripCount, setTripCount] = useState(1);
  const costPerTrip = 0.25;

  useEffect(() => {
    calculateMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cornQuantity, geeseQuantity, initialGeeseQuantity, initialCornQuantity]);

  useEffect(() => {
    calculateTripCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cornQuantity, geeseQuantity, initialGeeseQuantity, initialCornQuantity]);

  const calculateTripCount = () => {
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
  };

  const calculateMessage = () => {
    if (cornQuantity === 0 && geeseQuantity === 0) {
      return setMessage(`no cargo to take`);
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
    return parseFloat(tripCount * costPerTrip).toFixed(2);
  };

  const cornQuantityHandler = (value) => {
    setCornQuantity(value);
  };

  const geeseQuantityHandler = (value) => {
    setGeeseQuantity(value);
  };

  return (
    <form>
      <legend>Plan your trip</legend>
      <fieldset>
        <div className="input-group">
          <QuantityInput
            label="Corn Quantity"
            initialQuantity={cornQuantity}
            onQuantityChange={cornQuantityHandler}
          ></QuantityInput>
        </div>
        <div className="input-group">
          <QuantityInput
            label="Geese Quantity"
            initialQuantity={geeseQuantity}
            onQuantityChange={geeseQuantityHandler}
            
          ></QuantityInput>
        </div>
      </fieldset>
      <label>£ {calculateCostOfTrip()}</label>
      <p className="user-info">{message}</p>
      <p className="user-info">Trip Count: {tripCount}</p>
    </form>
  );
};

export default TripCalculator;
