import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import BookButton from "./BookButton";

const Header = () => {
  return (
    <div className="flex flex-row justify-between pt-16">
      <img className="hidden md:block h-[55px]" src={logo} alt="logo" />
      <img className="block md:hidden h-[55px]" src={icon} alt="logo" />
      <nav className="flex items-end pb-4">
        <ul className="flex flex-row justify-between">
          <li className="pr-11">Menu</li>
          <li className="pr-11">Events</li>
          <li className="pr-11">Gallery</li>
          <li className="pr-11">About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <BookButton />
    </div>
  );
};

export default Header;
