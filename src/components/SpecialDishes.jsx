import {
  dish5,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
  bg10,
  bg11,
  bg12,
  bg13,
} from "../assets";
import BookButton from "./BookButton";
import DishCard from "./DishCard";
import MenuButton from "./MenuButton";

const SpecialDishes = () => {
  return (
    <div className="bg-[#E6E7E7]">
      <div className="container relative py-24 my-24">
        <img
          src={bg4}
          alt={bg4}
          className="absolute top-[40px] lg:left-[190px] left-10"
        />
        <img
          src={bg5}
          alt={bg5}
          className="absolute top-[40px] right-[250px]"
        />
        <img
          src={bg6}
          alt={bg6}
          className="absolute md:top-[650px] top-[350px] md:left-[250px]"
        />
        <img
          src={bg7}
          alt={bg7}
          className="absolute top-[650px] md:right-[250px]"
        />
        <img
          src={bg8}
          alt={bg8}
          className="absolute top-[650px] right-[50px]"
        />
        <img
          src={bg9}
          alt={bg9}
          className="absolute xl:top-[750px] top-[1000px] lg:right-[450px] right-[200px]"
        />
        <img
          src={bg10}
          alt={bg10}
          className="absolute xl:top-[900px] top-[1200px] xl:right-[300px] right-[200px]"
        />
        <img
          src={bg11}
          alt={bg11}
          className="absolute xl:top-[1300px] top-[1500px] xl:right-[500px] right-[300px]"
        />
        <img
          src={bg12}
          alt={bg12}
          className="absolute xl:top-[1400px] top-[1600px] xl:right-[400px] right-[200px]"
        />
        <img
          src={bg13}
          alt={bg13}
          className="absolute xl:top-[1100px] lg:top-[900px] md:top-[1100px] top-[2000px] xl:right-0 lg:right-0 md:right-[400px] right-0"
        />

        <div className="flex flex-col items-center pb-16">
          <h2 className="h2title">Our Special Dishes</h2>
          <p className=" max-w-sm text-left pt-6">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-32">
          <DishCard />
        </div>

        <div className="flex md:flex-row flex-col relative z-10">
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
