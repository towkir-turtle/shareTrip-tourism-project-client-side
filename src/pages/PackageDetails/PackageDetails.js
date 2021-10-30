import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./PackageDetails.css";
const PackageDetails = () => {
  const { user } = useAuth();
  const { packageId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const singlePackage = details?.find((sp) => sp.id == packageId);
  return (
    <div>
      <h2>Welcome {user.displayName}</h2>
      <p>Your Email: {user.email}</p>
      <div className="package">
        <div>
          <img src={singlePackage?.img} />
        </div>
        <div className="packageInfo">
          <h3>{singlePackage?.name}</h3>
          <p>{singlePackage?.description}</p>
          <p>{singlePackage?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
