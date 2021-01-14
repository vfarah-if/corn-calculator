import React from "react";
import { render } from "@testing-library/react";

import {
  DefaultZeros,
  OneGooseAndZeroCorn,
  OneCornAndZeroGoose,
  TwoCornAndZeroGoose,
  OneCornAndOneGoose,
  OneGooseAndTwoCorns,
  TwoGooseAndOneCorns,
} from "../TripCalculator.stories";

describe("Trip Calculator", () => {
  test("should default with 0 goose, 0 corn : cost £0.25 : no cargo to take", () => {
    const { container } = render(<DefaultZeros {...DefaultZeros.args} />);

    expect(container).toMatchSnapshot("default zeros");
  });

  test("should get 1 goose, 0 corn : cost £0.25 : take in this order : goose", () => {
    const { container } = render(
      <OneGooseAndZeroCorn {...OneGooseAndZeroCorn.args} />
    );

    expect(container).toMatchSnapshot("one goose only");
  });

  test("should get 0 goose, 1 corn : cost £0.25 : take in this order : corn", () => {
    const { container } = render(
      <OneCornAndZeroGoose {...OneCornAndZeroGoose.args} />
    );

    expect(container).toMatchSnapshot("one corn only");
  });

  test("should get 0 goose, 2 corn : cost £0.50 : take in this order : corns", () => {
    const { container } = render(
      <TwoCornAndZeroGoose {...TwoCornAndZeroGoose.args} />
    );

    expect(container).toMatchSnapshot("two corn only");
  });

  test("should get 1 goose, 1 corn : cost £0.50 : take corn first", () => {
    const { container } = render(
      <OneCornAndOneGoose {...OneCornAndOneGoose.args} />
    );

    expect(container).toMatchSnapshot("one of each");
  });


  test("should get 1 goose, 2 corn : Do not make trip, corn is at risk", () => {
    const { container } = render(
      <OneGooseAndTwoCorns {...OneGooseAndTwoCorns.args} />
    );

    expect(container).toMatchSnapshot("one goose and 2 corns");
  });

  test("should get 2 goose, 1 corn : Do not make trip, corn is at risk", () => {
    const { container } = render(
      <TwoGooseAndOneCorns {...TwoGooseAndOneCorns.args} />
    );

    expect(container).toMatchSnapshot("2 goose and 1 corns");
  });
});
