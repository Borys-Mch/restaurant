import React from "react";
import Carousel from "./Carousel";

const Customers = () => {
  return (
    <div className="bg-[#E6E7E7]">
      <div className="container py-32">
        <h2 className="h2title text-center">Our Happy Customers</h2>
        <p className="max-w-sm text-center mx-auto pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt{" "}
        </p>
        <Carousel />
      </div>
    </div>
  );
};

export default Customers;
