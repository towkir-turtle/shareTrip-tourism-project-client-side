import React from "react";
import Banner from "../Banner/Banner";
import Hotels from "../Hotels/Hotels";
import Packages from "../Packages/Packages";
import Flights from "../Flights/Flights";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Packages></Packages>
      <Hotels></Hotels>
      <Flights></Flights>
    </div>
  );
};

export default Home;
