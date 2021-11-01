import React from "react";
import { Container } from "react-bootstrap";
import flight1 from "../../../images/flights/flight1.jpg";
import flight2 from "../../../images/flights/flight2.png";
import flight3 from "../../../images/flights/flight3.png";
import "./Flights.css";
const Flights = () => {
  return (
    <div className="flights">
      <Container>
        <div className="flight-container">
          <div className="flight">
            <div className="flight-img">
              <img src={flight1} />
            </div>
            <div className="flight-info">
              <div>
                <p>On Bangladesh Airlines</p>
                <h4>Save upto 10%</h4>
              </div>
            </div>
          </div>
          <div className="flight">
            <div className="flight-img">
              <img src={flight2} />
            </div>
            <div className="flight-info">
              <div>
                <p>On Turkish Airlines</p>
                <h4>Save upto 15%</h4>
              </div>
            </div>
          </div>
          <div className="flight">
            <div className="flight-img">
              <img src={flight3} />
            </div>
            <div className="flight-info">
              <div>
                <p>On NOVOAIR Flights</p>
                <h4>Save upto 7%</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Flights;
