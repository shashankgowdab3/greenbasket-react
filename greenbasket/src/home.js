import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">

            <div className="welcome">
                <h1>Welcome to the GreenBasket</h1>
                <p>Get your groceries delivered instanty</p>
                <button onClick={() => navigate("/shop")}>Shop now</button>
            </div>

            <div className="intro">
                <h2>Why Greenbasket</h2>
                <p>Get all your daily essentials - grains, vegetables, diary, and more in just few clicks. fast delivery, fresh products, and affordable prices!</p>
            </div>

            <div className="categories">
                <h2>Categories</h2>
                <div className="category-list">
                    <div className="card">Grains</div>
                    <div className="card">Pulses</div>
                    <div className="card">Flours</div>
                    <div className="card">Essentials</div>
                    <div className="card">Oils</div>
                    <div className="card">Spices</div>
                    <div className="card">Vegetables</div>
                    <div className="card">Diary</div>
                    <div className="card">Beverages</div>
                </div>
            </div>
        </div>
    )
};

export default Home

