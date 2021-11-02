import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer-container">
          <div>
            <h3>Address</h3>
            <p>
              <Link>ShareTrip Ltd</Link>
            </p>
            <p>
              <Link>3rd Floor, Taneem Square</Link>
            </p>
            <p>
              <Link>
                158/E, Kemal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh
              </Link>
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <p>
              <Link>Spin to Win</Link>
            </p>
            <p>
              <Link>Leader Board</Link>
            </p>
          </div>
          <div>
            <h3>Help</h3>
            <p>
              <Link>FAQ</Link>
            </p>
            <p>
              <Link>Support Center</Link>
            </p>
            <p>
              <Link>Payment Security</Link>
            </p>
            <p>
              <Link>Privacy Policy</Link>
            </p>
          </div>
          <div>
            <h3>Trems & Condition</h3>
            <p>
              <Link>General</Link>
            </p>
            <p>
              <Link>Spin to Win</Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
