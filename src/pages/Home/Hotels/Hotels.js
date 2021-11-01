import React from "react";
import { Container } from "react-bootstrap";
import { FaBuilding } from "react-icons/fa";
import "./Hotels.css";
const Hotels = () => {
  return (
    <div className="hotels">
      <Container>
        <h2 className="title">Search for hotels in popular destinations</h2>
        <div className="hotel-container">
          <div className="hotel">
            <h4>Waikiki Beach</h4>
            <p className="price">
              BDT 18,421/<span className="time">night</span>
            </p>
          </div>

          <div className="hotel">
            <h4>Amsterdam</h4>
            <p className="price">
              BDT 29,192/<span className="time">night</span>
            </p>
          </div>

          <div className="hotel">
            <h4>Nevsehir</h4>
            <p className="price">
              BDT 5,192/<span className="time">night</span>
            </p>
          </div>

          <div className="hotel">
            <h4>Kuala Lumpur</h4>
            <p className="price">
              BDT 9,029/<span className="time">night</span>
            </p>
          </div>

          <div className="hotel">
            <h4>Bangkok</h4>
            <p className="price">
              BDT 11,029/<span className="time">night</span>
            </p>
          </div>

          <div className="hotel">
            <h4>Kathmandu</h4>
            <p className="price">
              BDT 6,540/<span className="time">night</span>
            </p>
          </div>

          <div className="hotel">
            <h4>Keyser</h4>
            <p className="price">
              BDT 8,472/<span className="time">night</span>
            </p>
          </div>

          <div className="hotel">
            <h4>Gurgaon</h4>
            <p className="price">
              BDT 6,082/<span className="time">night</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hotels;
