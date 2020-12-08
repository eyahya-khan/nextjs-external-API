import React from "react";
import { render } from "@testing-library/react";
import Footer from "./footer";

test("renders copyright correct", () => {
  const { getByText } = render(<Footer />);
  getByText("@Copyright by Eyahya Khan");
});

// test("does not render wrong title", () => {
//   const { queryByText } = render(<Title>A title</Title>);
//   const title = queryByText("Another title");
//   expect(title).toBeNull();
// });
