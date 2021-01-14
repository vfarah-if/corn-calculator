import React from "react";
import { render } from "@testing-library/react";

import { DefaultZeros, OneGooseAndZeroCorn } from "../TripCalculator.stories";

describe("Trip Calculator", () => {
  test("should default with 0 goose, 0 corn : cost £0.25 : no cargo to take", () => {
    const { container } = render(<DefaultZeros {...DefaultZeros.args} />);

    expect(container).toMatchSnapshot("default zeros");
  });

  test("should get 1 goose, 0 corn : cost £0.25 : take in this order : goose", () => {
    const { container } = render(<OneGooseAndZeroCorn {...OneGooseAndZeroCorn.args} />);

    expect(container).toMatchSnapshot("one goose only");
  });
});
