import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>GREENBASKET</h3>
                    <p>Get fresh groceries deleverd to your doorstep. Fast delevery, quality products, and affordable prices.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">SHOP</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/cart">CART</Link></li>
                        <li><Link to="/login">LOGIN</Link></li>
                        <li><Link to="/register">REGISTER</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Location: Bangalore, India</p>
                    <p>Email: support@greenbasket.com</p>
                    <p>Phone: +91 9098765434</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>2026 GREENBASKET. All rights reserverd.</p>
            </div>
        </footer>

    )
};

export default Footer;