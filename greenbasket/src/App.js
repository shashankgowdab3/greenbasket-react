import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Shop from "./shop";
import Cart from "./cart";
import Register from "./register";
import About from "./about";
import Login from "./login";
import Footer from "./footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
};


export default App;

