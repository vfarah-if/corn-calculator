import React, { useState } from "react";
import PropTypes from "prop-types";

import "./style/index.css";

const QuantityInput = ({ label, initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(
    initialQuantity && initialQuantity >= 0 ? initialQuantity : 0
  );
  const quantityChangeHandler = (e) => {
    let value = Number.parseInt(e.target.value, 10) || 0;
    if (value < 0) {
      value = 0;
    }
    console.debug(`${label} Quantity `, value);
    setQuantity(value);
    onQuantityChange(value);
  };

  return (
    <>
      <label forhtml="quantity">{label}:</label>
      <input
        type="number"
        name="quantity"
        value={quantity}
        onChange={quantityChangeHandler}
        min={0}
      />
    </>
  );
};

QuantityInput.propTypes = {
  label: PropTypes.string.isRequired,
  initialQuantity: PropTypes.number,
  onQuantityChange: PropTypes.func.isRequired,
};

export default QuantityInput;
