import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders initial counter value of 0", () => {
  render(<Counter />);
  const counterElement = screen.getByText("0");
  expect(counterElement).toBeInTheDocument();
});

test("increments counter value when increment button is clicked", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Increment");
  const counterElement = screen.getByText("0");

  incrementButton.click();

  expect(counterElement).toHaveTextContent("1");
});

test("decrements counter value when decrement button is clicked", () => {
  render(<Counter />);
  const decrementButton = screen.getByText("Decrement");
  const counterElement = screen.getByText("0");

  decrementButton.click();

  expect(counterElement).toHaveTextContent("0");
});

test("does not increment counter value above 10", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Increment");
  const counterElement = screen.getByText("0");

  for (let i = 0; i < 15; i++) {
    incrementButton.click();
  }

  expect(counterElement).toHaveTextContent("10");
});

test("does not decrement counter value below 0", () => {
  render(<Counter />);
  const decrementButton = screen.getByText("Decrement");
  const counterElement = screen.getByText("0");

  decrementButton.click();

  expect(counterElement).toHaveTextContent("0");
});
