import { dish5 } from "../assets";
import BookButton from "./BookButton";
import DishCard from "./DishCard";
import MenuButton from "./MenuButton";

const SpecialDishes = () => {
  return (
    <div className="bg-[#E6E7E7]">
      <div className="container py-24 my-24">
        <div className="flex flex-col items-center pb-16">
          <h2 className="h2title">Our Special Dishes</h2>
          <p className=" max-w-sm text-left pt-6">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
          <DishCard />
        </div>

        <div className="flex md:flex-row flex-col">
          <img src={dish5} alt="dish22" className="md:w-[60%] w-full" />
          <div className="md:w-[40%] w-full flex flex-col justify-center">
            <h2 className="h2title text-left">Wecome to Our Restaurant</h2>
            <p className="pt-10 text-left max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-row justify-start pt-10">
              <MenuButton />
              <BookButton className="h-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDishes;
