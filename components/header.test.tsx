import React from "react";
import { render } from "@testing-library/react";
import Header from "./header";

test("renders copyright correct", () => {
  const { getByText } = render(<Header />);
  getByText("ITHögskolan Lab-3");
});
