import React from "react";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="App__bg App__navbar">
      <div className="nikelogo">
        <img src={images.NikeLogo} alt="Nike Logo" className="logo" />
      </div>

      <ul className="app_navbar_links">
        <li className="p__inter links ">
          <a href="#women" className="target">
            Women
          </a>
        </li>
        <li className="p__inter links">
          <a href="#Men"> Men </a>
        </li>
        <li className="p__inter links">
          <a href="#Kids"> Kids </a>
        </li>
        <li className="p__inter links">
          <a href="#Collections"> Collections </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
