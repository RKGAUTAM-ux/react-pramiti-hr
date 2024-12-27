import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="site-container">`
        <div className="footer-columns">
          {/* Column 1 */}
          <div className="footer-column">
            <h4>About Us</h4>
            <p>
              We are dedicated to providing the best services in the industry. Learn more about us and our mission.
            </p>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h4>Contact</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Street Name, City, Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
