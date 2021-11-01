import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer-container">
          <div>
            <h3>Company</h3>
            <p>About Us</p>
          </div>
          <div>
            <h3>Explore</h3>
            <p>Spin to Win</p>
            <p>Leader Board</p>
          </div>
          <div>
            <h3>Help</h3>
            <p>FAQ</p>
            <p>Support Center</p>
            <p>Payment Security</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h3>Trems & Condition</h3>
            <p>General</p>
            <p>Spin to Win</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
