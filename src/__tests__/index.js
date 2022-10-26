import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("Trends work as expected", async () => {
  render(<App />);
  const title = await screen.findByText(/rainy tuesday/i);
  expect(title).toBeInTheDocument();
});

test("Home work as expected", async () => {
  render(<App />);
  const gifLink = await screen.findByRole("image");
  expect(gifLink).toBeVisible();
});

test("Search work as expected", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "matrix" } });
  fireEvent.keyPress(input);

  //const button = await screen.findByRole("button");
  //fireEvent.click(button);

  // debug de testing library
});
