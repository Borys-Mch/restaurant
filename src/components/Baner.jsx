import { maskgroup, dish21, facebook, instagram, twitter } from "../assets";
import BookButton from "./BookButton";
import MenuButton from "./MenuButton";

const Baner = () => {
  return (
    <div className="container flex md:flex-row flex-col-reverse md:py-32 py-0">
      <div className="w-full md:w-[50%] flex flex-col justify-center md:pt-0 pt-16">
        <h1 className="font-david font-bold md:text-7xl text-4xl text-left">
          We provide the best food for you
        </h1>
        <p className="pt-16 text-left max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-row justify-start pt-10">
          <MenuButton />
          <BookButton className="h-14" />
        </div>
        <div className="flex flex-wrap md:pt-24 pt-10">
          <img
            src={facebook}
            alt="facebook"
            className="w-9 h-9 mr-4 cursor-pointer"
          />
          <img
            src={instagram}
            alt="instagram"
            className="w-9 h-9 mr-4 cursor-pointer"
          />
          <img src={twitter} alt="twitter" className="w-9 h-9 cursor-pointer" />
        </div>
      </div>

      <div className="w-full md:w-[50%] relative">
        <img src={maskgroup} alt="maskgroup" />
        <img
          src={dish21}
          alt="dish21"
          className="absolute bottom-0 left-[-30%]"
        />
      </div>
    </div>
  );
};

export default Baner;
