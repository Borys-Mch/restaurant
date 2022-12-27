import { logo, facebook, instagram, twitter, bg } from "../assets";
import { footerDishes, footerNavigation } from "../constants";

const Footer = () => {
  return (
    <div className="container flex flex-col">
      <div className="bg-footer-form bg-cover rounded-3xl relative top-[-250px]">
        <h3 className="text-white text-5xl text-center font-david font-bold pt-24">
          Get Or Promo Code by <br /> Subscribing To our Newsletter
        </h3>
        <div className="flex flex-row max-w-2xl bg-white py-3 px-4 my-14 rounded-2xl mx-auto">
          <input
            type="text"
            placeholder="Enter your email"
            className=" w-full"
          />
          <button className="bg-orange-500 p-4 rounded-2xl text-white font-bold">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mt-[-200px]">
        <div className="w-full md:w-[40%]">
          <img className="hidden md:block h-[55px]" src={logo} alt="logo" />
          <p className="pt-5 text-justify text-[#5C6574]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
            <a className="underline" href="#">
              Learn more
            </a>
          </p>
          <h6 className="pt-5 footertitle">OPENING HOURS</h6>
          <table className="mt-5 w-full text-left text-[#5C6574]">
            <thead>
              <tr>
                <td>Monday - Friday</td>
                <td>Saturday</td>
                <td>Sunday</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8:00 am to 9:00 pm</td>
                <td>8:00 am to 9:00 pm</td>
                <td>CLOSED</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[30%] pt-8">
          <div className="px-5">
            <h6 className="footertitle">Navigation</h6>
            <ul className="text-left text-[#5C6574]">
              {footerNavigation.map((nav) => (
                <li key={nav.id}>{nav.title}</li>
              ))}
            </ul>
          </div>
          <div className="px-5">
            <h6 className="footertitle">DISHES</h6>
            <ul className="text-left text-[#5C6574]">
              {footerDishes.map((nav) => (
                <li key={nav.id}>{nav.title}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[30%] pt-8">
          <h6 className="footertitle">FOLLOW US</h6>
          <div className="flex flex-wrap pt-6">
            <img src={facebook} alt="facebook" className="w-9 h-9 mr-4" />
            <img src={instagram} alt="instagram" className="w-9 h-9 mr-4" />
            <img src={twitter} alt="twitter" className="w-9 h-9" />
          </div>
        </div>
      </div>

      <hr className="my-12 border-gray-300" />

      <div className="flex flex-1 flex-grow justify-between">
        <p>© 2022 Restaurants. All Right Reserved.</p>
        <div className="flex">
          <p className="pr-10">Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
