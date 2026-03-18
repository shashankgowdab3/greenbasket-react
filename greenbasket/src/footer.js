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
                        <li>HOME</li>
                        <li>SHOP</li>
                        <li>ABOUT</li>
                        <li>CART</li>
                        <li>LOGIN</li>
                        <li>REGISTER</li>
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
                <p><marquee>2026 GREENBASKET. All rights reserverd.</marquee></p>
            </div>
        </footer>

    )
};

export default Footer;