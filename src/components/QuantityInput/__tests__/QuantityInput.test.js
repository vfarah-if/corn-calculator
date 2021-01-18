import React from "react";
import { fireEvent, render } from "@testing-library/react";

import {
  Default,
  QuantityOfOne,
  QuantityOfNegativeWillBeZero,
} from "../QuantityInput.stories";
import QuantityInput from "../QuantityInput";

describe("QuantityInput", () => {
  test("should create a default label and input component defaulting quantity to zero", () => {
    const { container } = render(<Default {...Default.args} />);

    expect(container).toMatchSnapshot("default");
  });

  test("should have a quantity of 1 when set or changed", () => {
    const { container } = render(<QuantityOfOne {...Default.args} />);

    expect(container).toMatchSnapshot("quantity of one");
  });

  test("should set negative quantity to zero", () => {
    const { container } = render(
      <QuantityOfNegativeWillBeZero {...Default.args} />
    );

    expect(container).toMatchSnapshot("negative quantity");
  });

  test("should assign a value to the onQuantityChange", async () => {
    const expectedNumber = 2;
    const handleChange = jest.fn();
    const { container } = render(
      <QuantityInput label="Test" initialQuantity={0} onQuantityChange={handleChange} />
    );

    const inputElement = container.querySelector('input');
    fireEvent.change(inputElement, { target: { value: expectedNumber } });

    expect(inputElement.value).toBe(expectedNumber.toString());
    expect(handleChange).toHaveBeenCalledWith(expectedNumber);
    expect(handleChange).toBeCalledTimes(1);
  });
});
