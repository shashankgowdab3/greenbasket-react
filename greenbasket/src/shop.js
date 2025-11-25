import React, { useEffect, useState } from "react";
import "./shop.css";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="shop-container">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <h3>{product.name}</h3>
          <p>₹ {product.pricePerKg}</p>
          <p>{product.category}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Shop;