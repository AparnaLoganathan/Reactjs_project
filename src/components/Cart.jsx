import React from "react";

function Cart({ cart, removeFromCart, placeOrder }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              {item.name} - ₹{item.price}
              <button onClick={() => removeFromCart(index)}>❌</button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <button className="order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;