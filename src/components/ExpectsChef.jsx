import { check, chef, bg14, bg15 } from "../assets";
import BookButton from "./BookButton";
import MenuButton from "./MenuButton";

const ExpectsChef = () => {
  return (
    <div className="container relative flex md:flex-row flex-col-reverse pb-28">
      <img
        src={bg14}
        alt={bg14}
        className="absolute top-[-50px] left-[-100px]"
      />
      <img
        src={bg15}
        alt={bg15}
        className="absolute md:top-[-50px] top-[350px]"
      />
      <div className="flex flex-col justify-center md:w-[60%] w-full">
        <h2 className="h2title text-left">Our Expects Chef</h2>
        <p className="text-left max-w-sm pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-row">
          <ul className="mt-6 mr-7">
            <li className="flex flex-row py-3 max-w-[300px]">
              <img src={check} alt="check" />
              <p className="pl-3">Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li className="flex flex-row py-3 max-w-[300px]">
              <img src={check} alt="check" />
              <p className="pl-3">Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li className="flex flex-row py-3 max-w-[300px]">
              <img src={check} alt="check" />
              <p className="pl-3">Lorem ipsum dolor sit amet, consectetur</p>
            </li>
          </ul>
          <ul className="mt-6 mr-7">
            <li className="flex flex-row py-3 max-w-[300px]">
              <img src={check} alt="check" />
              <p className="pl-3">Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li className="flex flex-row py-3 max-w-[300px]">
              <img src={check} alt="check" />
              <p className="pl-3">Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li className="flex flex-row py-3 max-w-[300px]">
              <img src={check} alt="check" />
              <p className="pl-3">Lorem ipsum dolor sit amet, consectetur</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-start pt-10">
          <MenuButton />
          <BookButton className="h-14" />
        </div>
      </div>
      <img src={chef} alt="chef" className="md:w-[40%] w-full md:pt-0 pb-12" />
    </div>
  );
};

export default ExpectsChef;
