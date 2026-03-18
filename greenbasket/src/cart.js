import React, { useEffect, useState } from "react";
import "./style.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);

    let t = 0;
    cart.forEach((item) => (t += item.pricePerKg));
    setTotal(t);
  }, []);

  const removeItem = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    let t = 0;
    newCart.forEach((item) => (t += item.pricePerKg));
    setTotal(t);
  };

  const payment = () => {
    alert("Payment done! Your order will be delivered in 10 mins");
    localStorage.removeItem("cart");
    setCartItems([]);
    setTotal(0);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <h4>{item.name}</h4>
              <p>₹ {item.pricePerKg}</p>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}

          <h3>Total: ₹ {total}</h3>
          <p>Your order will be delivered in 10 mins</p>
          <button onClick={payment}>Proceed to Payment</button>
        </>
      )}
    </div>
  );
}

export default Cart;