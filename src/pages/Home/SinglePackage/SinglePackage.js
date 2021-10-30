import React from "react";
import { Link } from "react-router-dom";
import "./SinglePackage.css";
const SinglePackage = (props) => {
  const { id, img, name, totalPackage, price } = props.singlePackage;
  return (
    <div className="singlePackage">
      <div>
        <img className="packageImg" src={img} />
      </div>
      <div>
        <p>
          <small>{totalPackage}</small>
        </p>
        <h3>{name}</h3>
        <p>
          <small>starts from</small> <span>{price}</span>{" "}
        </p>
        <Link to={`/packageDetails/${id}`}>view more</Link>
      </div>
    </div>
  );
};

export default SinglePackage;
