import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

let basicCounter;
let increaseCount;
let decreaseCount;

it("should render a counter with value of 1", () => {
  render(<App />);
  basicCounter = screen.getByTestId("poop");
  increaseCount = screen.getByRole("button", { name: "Increment" });
  decreaseCount = screen.getByRole("button", { name: "Decrement" });
});

it("should increase count when plus button is clicked", () => {
  render(<App />);
  expect(basicCounter).toHaveValue(0);
  userEvent.click(increaseCount);
  expect(basicCounter).toHaveValue(1);
});

it("should contain inner text of increment", () => {
  expect(increaseCount).toHaveTextContent("Increment");
});
