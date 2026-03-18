import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">GREENBASKET</div>

      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/shop">SHOP</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/cart">CART</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
        <li><Link to="/register">REGISTER</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;