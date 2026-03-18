import React, { useEffect, useState } from "react";
import "./style.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://greenbasket-api.onrender.com/products")
      .then((res) => res.json())
      .then(data =>{
        setProducts(data);
        setLoading(false);
      })
      .catch(err=>{
        console.log(err);
        setLoading(false);
      })
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  if(loading){
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading Products...</p>
      </div>
    );
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