import { useState } from 'react';

function App() {
  const [ pepperoniIsChecked, setPepperoniIsChecked ] = useState(false);

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);

  const [ deliveryIsSelected, setDeliveryIsSelected ] = useState(false);
  const [ pickupIsSelected, setPickupIsSelected ] = useState(true);
  const [ orderIsSubmitted, setOrderIsSubmitted ] = useState(false);

  const toggleRadioButtons = () => {
    setDeliveryIsSelected(!deliveryIsSelected);
    setPickupIsSelected(!pickupIsSelected)
  }

  const submitOrder = (event) => {
    event.preventDefault();
    setOrderIsSubmitted(true);
  }


  const displayAddress = () => (
      <div>
        <h3><label htmlFor="address">Enter your street address: </label></h3>
        <input type="text" placeholder="Street address" id="address"/>
        <br /><br />
      </div>
  )

  return (
    <div>
      <h1>Order Your Pizza</h1>
      <form>
        <h2>Select Pizza Toppings</h2>
        <input 
          type="checkbox" 
          id="pepperoni" 
          checked={pepperoniIsChecked}
          aria-checked={pepperoniIsChecked}
          onChange={togglePepperoni}
        />
        <label htmlFor="pepperoni">Add pepperoni</label>

        <h3>Your Toppings:</h3>
        <ul>
          <li>Cheese</li>
          {pepperoniIsChecked ? <li>Pepperoni</li> : null}
        </ul>

        <h3><label htmlFor="select-size">Select size: </label></h3>
        <select id="select-size" defaultValue="Small">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <br />
        <br />

        <h3>Pickup or delivery?</h3>
        <input
          type="radio"
          value="Pickup"
          id="pickup"
          checked={pickupIsSelected}
          aria-checked={pickupIsSelected}
          onChange={toggleRadioButtons}
        /> 
        <label htmlFor="pickup">Pickup </label>

        <input
          type="radio"
          value="Delivery"
          id="delivery"
          checked={deliveryIsSelected}
          aria-checked={deliveryIsSelected}
          onChange={toggleRadioButtons}
        /> 
        <label htmlFor="delivery">Delivery</label>
        <br />
        <br />

        {deliveryIsSelected ? displayAddress() : null}

        <button onClick={submitOrder}>Place Order</button>
      </form>

      { orderIsSubmitted ? <h2>Your order has been submitted</h2> : null}
    </div>
  )}

export default App;
