import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Pepperoni checkbox
test("checkbox is initially unchecked", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  expect(addPepperoni).not.toBeChecked();
});

test("checkbox appears as checked when user clicks it", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});

test("checkbox appears as unchecked when user clicks a second time", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(addPepperoni);

  expect(addPepperoni).toBeChecked();

  userEvent.click(addPepperoni);

  expect(addPepperoni).not.toBeChecked();
});

// Size select element
test("size select element initially displays 'small'", () => {
  render(<App />);
  const selectSize = screen.getByLabelText(/select size/i);
  expect(selectSize).toHaveDisplayValue("small");
});

// "Your Selection" text
test("selected size dropdown displays the user's selected value", () => {
  render(<App />);
  const selectSize = screen.getByLabelText(/select size/i);
  userEvent.selectOptions(selectSize, "medium");
  expect(selectSize).toHaveDisplayValue("medium");
  userEvent.selectOptions(selectSize, "large");
  expect(selectSize).toHaveDisplayValue("large");
});

test("'Your selection' message initially displays 'small chees'", () => {
  render(<App />);
  expect(screen.getByText(/small cheese/i)).toBeInTheDocument();
});

// "Contact Info" text box

test("'contact info' text box initially displays a placeholder value of 'email address'", () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
});

test("the page shows information what user types in input field", () => {
  render(<App />);
  const contact = screen.getByLabelText(/Enter your email address /i);
  userEvent.type(contact, "pizzafan@gmail.com");
  expect(contact).toHaveValue("pizzafan@gmail.com");
});

// Submit Order button
test("form contains a submit order button", () => {
  render(<App />);
  const submit = screen.getByRole("button", { name: /submit order/i });
  expect(submit).toBeInTheDocument();
});

test("click submit button display a thank you message", () => {
  render(<App />);
  userEvent.click(screen.getByRole("button", { name: /submit order/i }));
  expect(screen.getByText(/Thank you for the order!/i)).toBeInTheDocument();
});
