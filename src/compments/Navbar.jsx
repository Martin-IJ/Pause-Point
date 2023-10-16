import React, { useState } from "react";
import Logo from "../assets/Pause Point 3 1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="nav-container flex justify-center">
      <div className="max-w-[85%] w-[100%] flex justify-between items-center">
        <img src={Logo} alt="logo" />
        <div>
          <div onClick={handleClick} className="lg:hidden text-2xl">
            {navbar ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </div>
          <ul
            className={`lg:flex items-center lg:space-x-12 ${
              navbar
                ? "absolute right-0 top-20 max-w-[300px] w-full bg-white p-10 flex flex-col items-baseline gap-10 mt-1"
                : "hidden"
            }`}
          >
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="">
              <li>Contact Us</li>
            </Link>
            <button className="downloadBtn">Download App</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
