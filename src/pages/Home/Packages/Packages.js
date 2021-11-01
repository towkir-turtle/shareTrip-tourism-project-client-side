import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import SinglePackage from "../SinglePackage/SinglePackage";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div className="package-container">
      <Container>
        <h2 className="title">Packages in Popular Destinations</h2>
        <div className="packages">
          {packages.map((singlePackage) => (
            <SinglePackage
              key={singlePackage.id}
              singlePackage={singlePackage}
            ></SinglePackage>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Packages;
