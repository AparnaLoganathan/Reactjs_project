import React, { useState } from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import data from "./data";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    setCart([]);
  };

  return (
    <div className="app">
      <h1 className="title">🍽️ Foodies</h1>

      {orderPlaced && (
        <div className="success">
          ✅ Your order was successfully confirmed! <br />
          We will delivery it soon 🚚💖
        </div>
      )}

      <Menu data={data} addToCart={addToCart} />
      <Cart 
        cart={cart} 
        removeFromCart={removeFromCart} 
        placeOrder={placeOrder} 
      />
    </div>
  );
}

export default App;