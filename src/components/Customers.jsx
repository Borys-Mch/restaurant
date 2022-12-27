import React from "react";
import Carousel from "./Carousel";
import { bg16 } from "../assets";

const Customers = () => {
  return (
    <div className="bg-[#E6E7E7] relative">
      <div className="container pt-32 pb-[400px] relative z-10">
        <h2 className="h2title text-center">Our Happy Customers</h2>
        <p className="max-w-sm text-center mx-auto py-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt{" "}
        </p>
        <Carousel />
      </div>
      <img
        src={bg16}
        alt={bg16}
        className="absolute md:block hidden w-[50%] top-[140px]"
      />
    </div>
  );
};

export default Customers;
