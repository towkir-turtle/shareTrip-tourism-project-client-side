import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./PackageDetails.css";
const PackageDetails = () => {
  const { user } = useAuth();
  const { packageId } = useParams();
  const { register, handleSubmit, reset } = useForm();

  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const singlePackage = details?.find((sp) => sp.id == packageId);

  const onSubmit = (data) => {
    data.bookedPackage = singlePackage;
    axios.post("http://localhost:5000/bookings", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully booked package");
        reset();
      }
    });
  };

  return (
    <Container>
      <div className="package-details">
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

        <div className="submit-form">
          <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user.displayName}
              {...register("name", { required: true, maxLength: 20 })}
            />
            <br />
            <input defaultValue={user.email} {...register("email")} />
            <br />
            <input type="text" {...register("address")} placeholder="Address" />
            <br />
            <input type="text" {...register("city")} placeholder="City" />
            <br />
            <input
              type="number"
              {...register("phone number")}
              placeholder="phone number"
            />
            <br />
            <input type="submit" value="Book Now" />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default PackageDetails;
