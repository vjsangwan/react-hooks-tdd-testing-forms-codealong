import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Test the initial state of the page
// test("pizza checkbox is initially unchecked", () => {
//   render(<App />);

//   const addPepperoni = screen.getByRole("checkbox", {name: /add pepperoni/i});
  
//   expect(addPepperoni).not.toBeChecked();
// })

// test("toppings list initially contains only cheese", () => {
//   render(<App />);

//   expect(screen.getAllByRole("listitem").length).toBe(1);
//   expect(screen.getByText("Cheese")).toBeInTheDocument();
//   expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
// })

test("Size select element initially displays 'Small'", () => {
  render(<App />);

  const selectSize = screen.getByLabelText(/select size/i);

  expect(selectSize).toHaveDisplayValue("Small");
})

test("'Pickup' radio button is selected by default", () => {
  render(<App />);

  const pickup = screen.getByRole("radio", { name: /pickup/i });
  const delivery = screen.getByRole("radio", { name: /delivery/i });

  expect(pickup).toBeChecked();
  expect(delivery).not.toBeChecked();
})

test("street address form field is not present initially", () => {
  render(<App />);

  const streetAddress = screen.queryByLabelText(/street address/i);

  expect(streetAddress).not.toBeInTheDocument();
})

test("form contains an 'Order' button", () => {
  render(<App />);

  const orderButton = screen.getByRole("button", { name: /place order/i });

  expect(orderButton).toBeInTheDocument();
})

// Test the effect of clicking the checkbox
// test("checkbox appears as checked when user clicks it", () => {
//   render(<App />);

//   const addPepperoni = screen.getByRole("checkbox", {name: /add pepperoni/i});
  
//   userEvent.click(addPepperoni);
//   expect(addPepperoni).toBeChecked();
// })

// test("topping appears in toppings list when checked", () => {
//   render(<App />);

//   const addPepperoni = screen.getByRole("checkbox", {name: /add pepperoni/i});
  
//   userEvent.click(addPepperoni);

//   expect(screen.getAllByRole("listitem").length).toBe(2);
//   expect(screen.getByText("Cheese")).toBeInTheDocument();
//   expect(screen.getByText("Pepperoni")).toBeInTheDocument();
// })

// Test the effect of clicking the checkbox a second time
// test("selected topping disappears when checked a second time", () => {
//   render(<App />);

//   const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

//   userEvent.click(addPepperoni);

//   expect(addPepperoni).toBeChecked();
//   expect(screen.getByText("Cheese")).toBeInTheDocument();
//   expect(screen.getByText("Pepperoni")).toBeInTheDocument();

//   userEvent.click(addPepperoni);

//   expect(addPepperoni).not.toBeChecked();
//   expect(screen.getByText("Cheese")).toBeInTheDocument();
//   expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();

// });

// Test the Select Size dropdown
test("Select Size dropdown displays the user's selected value", () => {
  render(<App />);

  const selectSize = screen.getByLabelText(/select size/i);

  userEvent.selectOptions(selectSize, "medium");

  expect(selectSize).toHaveDisplayValue("Medium");

  userEvent.selectOptions(selectSize, "large");

  expect(selectSize).toHaveDisplayValue("Large");

})

// Test Pickup or Delivery radio buttons
test("'Pickup or Delivery' radio button clicked by user is selected and other button is unselected", () => {
  render(<App />);

  const pickup = screen.getByRole("radio", { name: /pickup/i });
  const delivery = screen.getByRole("radio", { name: /delivery/i });

  userEvent.click(pickup);

  expect(pickup).toBeChecked();
  expect(delivery).not.toBeChecked();

  userEvent.click(delivery);

  expect(pickup).not.toBeChecked();
  expect(delivery).toBeChecked();

})

test("text box for street address appears when 'delivery' is selected", () => {
  render(<App />);

  const delivery = screen.getByRole("radio", { name: /delivery/i });

  userEvent.click(delivery);

  expect(screen.getByLabelText(/street address/i)).toBeInTheDocument();

})

// Test Submit button
test("clicking the Place Order button displays a message that the order has been submitted", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /place order/i });
  
  userEvent.click(button);

  expect(screen.getByText("Your order has been submitted")).toBeInTheDocument();
})
