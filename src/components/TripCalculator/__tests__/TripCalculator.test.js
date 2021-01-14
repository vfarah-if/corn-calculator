import React from "react";
import { render } from "@testing-library/react";

import { DefaultZeros } from "../TripCalculator.stories";

describe("Trip Calculator", () => {
  test("should default with 0 goose, 0 corn : cost £0.25 : no cargo to take", () => {
    const { container } = render(<DefaultZeros {...DefaultZeros.args} />);

    expect(container).toMatchSnapshot("default zeros");
  });
});
