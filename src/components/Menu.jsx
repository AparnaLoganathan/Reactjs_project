import React from "react";
import Item from "./Item";

function Menu({ data, addToCart }) {
  return (
    <div className="menu">
      {data.map((item) => (
        <Item key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Menu;