import React from "react";
import { render } from "@testing-library/react";

import {
  DefaultHeader,
} from "../Header.stories";

describe("Header", () => {
  test("should create a header with custom image url", () => {
    const { container } = render(<DefaultHeader {...DefaultHeader.args} />);

    expect(container).toMatchSnapshot("default");
  });
});