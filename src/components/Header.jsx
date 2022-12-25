const Header = () => {
  return (
    <div className="flex flex-row">
      <img className="h-12" src="../assets/logo.png" alt="logo" />
      <nav>
        <ul className="flex flex-row justify-between">
          <li>Menu</li>
          <li>Events</li>
          <li>Gallery</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <button>Book a table</button>
    </div>
  );
};

export default Header;
