import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddNewPackage.css";
const AddNewPackage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://murmuring-beach-97346.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully added package");
          reset();
        }
      });
  };

  return (
    <div className="new-package">
      <div className="package-info">
        <h2>Add New Package</h2>
        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue="https://i.ibb.co/m9MMwHZ/imgbb.jpg"
            {...register("img")}
            placeholder="Insert image url"
          />
          <br />
          <input type="text" {...register("name")} placeholder="Package Name" />
          <br />
          <input type="number" {...register("price")} placeholder="price" />
          <br />
          <input type="submit" value="Add Package" />
        </form>
      </div>
    </div>
  );
};

export default AddNewPackage;
