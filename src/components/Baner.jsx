import {
  maskgroup,
  dish21,
  facebook,
  instagram,
  twitter,
  bg1,
  bg2,
  bg3,
} from "../assets";
import BookButton from "./BookButton";
import MenuButton from "./MenuButton";

const Baner = () => {
  return (
    <div className="container relative flex md:flex-row flex-col-reverse md:py-32 py-0">
      <div className="absolute md:block hidden w-[960px] h-[960px] xl:top-[-780px] lg:top-[-75%] top-[-94%] xl:left-[-580px] lg:left-[-68%] left-[-72%] border-slate-300 border-2 rounded-full -z-10"></div>
      <div className="absolute md:block hidden w-[960px] h-[960px] xl:top-[-680px] lg:top-[-65%] top-[-86%] xl:left-[-680px] lg:left-[-72%] left-[-80%] border-slate-300 border-2 rounded-full -z-10"></div>
      <div className="absolute md:block hidden w-[960px] h-[960px] xl:top-[-650px] lg:top-[-63%] top-[-85%] xl:left-[-550px] lg:left-[-65%] left-[-70%] border-slate-300 border-2 rounded-full -z-10"></div>
      <div className="w-full md:w-[50%] flex flex-col justify-center md:pt-0 pt-16 z-10">
        <h1 className="font-david font-bold lg:text-7xl md:text-5xl text-4xl text-left">
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
        <img
          src={bg1}
          alt={bg1}
          className="absolute top-[-100px] left-[-150px] -z-10"
        />
        <img
          src={bg2}
          alt={bg2}
          className="absolute top-[-130px] xl:left-[330px] left-10 -z-10"
        />
        <img
          src={bg3}
          alt={bg3}
          className="absolute lg:block hidden top-[330px] xl:left-[430px] left-20 -z-10"
        />
        <img src={maskgroup} alt="maskgroup" />
        <img
          src={dish21}
          alt="dish21"
          className="absolute bottom-0 lg:left-[-30%] left-[-15%] w-[70%]"
        />
      </div>
    </div>
  );
};

export default Baner;
