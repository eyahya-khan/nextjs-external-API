//check test work or not
// describe("Is working", () => {
//   it("Should work", () => {
//     expect(true).toBeTruthy();
//   });
// });
import React from "react";
import { render } from "@testing-library/react";
import Index from "../pages/index";

const allPostsData = [];

describe("index page", () => {
  test("renders title correct", () => {
    const { getByText } = render(<Index allPostsData={allPostsData} />);
    getByText("Welcome");
  });
});
