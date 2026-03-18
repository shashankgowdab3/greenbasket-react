import React from "react";
import "./style.css";

function About() {
    return (
        <div className="about-container">
            <h2>About GreenBasket</h2>
            <p>
                GreenBasket is an online grocery delivery platform that brings
                fresh and quality products right to your doorstep. Our goal is to make
                your daily shopping simple, fast, and affordable.
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
                <li>Fresh and High-Quality Products</li>
                <li>Fast Delivery within 10 minutes</li>
                <li>Best prices and trusted brands</li>
                <li>Easy Add-to-Cart & Secure Checkout</li>
            </ul>

            <p className="thanks">
                Thank you for choosing GreenBasket — Your trusted grocery partner!
            </p>
        </div>
    );
}

export default About;