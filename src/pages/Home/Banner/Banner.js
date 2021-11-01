import React from "react";
import { Carousel, Container } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";
import banner4 from "../../../images/banner/banner4.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>The London Eye</h3>
            <p>The London Eye is Europe's largest observation wheel</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Niseko, Japan</h3>
            <p>With an annual average snowfall of 49.5 feet.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Taj Mahal, Agra</h3>
            <p>
              This opulent white marble structure was commissioned to be built
              in 1632
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="Third slide" />

          <Carousel.Caption>
            <h3>Manaslu Circuit</h3>
            <p>
              The Manaslu Trek is a 14 to 16 day tea-house trek which encircles
              the world’s 8th highest peak
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
