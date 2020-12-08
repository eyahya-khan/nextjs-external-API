import React from "react";
import { render } from "@testing-library/react";
import Title from "./Title";

test("renders title correct", () => {
  const { getByText } = render(<Title>A title</Title>);
  getByText("A title");
});

test("does not render wrong title", () => {
  const { queryByText } = render(<Title>A title</Title>);
  const title = queryByText("Another title");
  expect(title).toBeNull();
});
