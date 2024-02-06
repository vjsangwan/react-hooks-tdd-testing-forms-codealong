import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [pizzaSize, setPizzaSize] = useState("small");
  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);
  const selectSizeHandle = (e) => setPizzaSize(e.target.value);
  const [contactInfo, setContactInfo] = useState("");
  const updateContactInfo = (e) => setContactInfo(e.target.value);
  const [messege, setMessage] = useState(false);

  const OnSubmitHandle = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div>
      <h1>Place an Order</h1>
      <p>
        Your Selection {pizzaSize} {pepperoniIsChecked ? "pepperoni" : "cheese"}
      </p>
      <form onSubmit={OnSubmitHandle}>
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>
        <div>
          <h3>Size</h3>
          <label htmlFor="select-size">Select Size</label>
          <select
            id="select-size"
            value={pizzaSize}
            onChange={selectSizeHandle}
          >
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </div>
        <div>
          <h3>Contact Info</h3>
          <label htmlFor="email"> Enter your email address :</label>
          <input
            type="text"
            id="email"
            placeholder="email address"
            value={contactInfo}
            onChange={updateContactInfo}
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>
      {messege ? <h2>"Thank you for the order!" </h2> : null}
    </div>
  );
}

export default App;
