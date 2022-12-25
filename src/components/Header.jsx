import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import BookButton from "./BookButton";
import { navBar } from "../constants";

const Header = () => {
  return (
    <div className="flex flex-row justify-between pt-16">
      <img className="hidden md:block h-[55px]" src={logo} alt="logo" />
      <img className="block md:hidden h-[55px]" src={icon} alt="logo" />
      <nav className="flex items-end pb-3">
        <ul className="flex flex-row justify-between">
          {navBar.map((nav, index) => (
            <li
              key={nav.id}
              className={`${index !== navBar.length - 1 ? "pr-12" : " "}`}>
              {nav.title}
            </li>
          ))}
        </ul>
      </nav>
      <BookButton />
    </div>
  );
};

export default Header;
