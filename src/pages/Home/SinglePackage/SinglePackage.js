import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SinglePackage.css";
const SinglePackage = (props) => {
  const { id, img, name, totalPackage, price } = props.singlePackage;
  return (
    <div className="singlePackage">
      <div>
        <div>
          <img className="packageImg" src={img} />
        </div>
        <div>
          <h3>{name}</h3>
          <p>
            <small>starts from BDT </small> <span>{price}</span>{" "}
          </p>
          <Button>
            <Link className="detailsBtn" to={`/packageDetails/${id}`}>
              view details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SinglePackage;
