import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="visione__navbar">
      <div className="visione__navbar-links">
        <div className="visione__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="visione__navbar-links_container">
          <p><a href="#home" >Home</a></p>
          <p><a href="#aboutus" >About Us</a></p>
          <p><a href="#contact" >Contact us</a></p>
          <p><a href="#project" >Our Projects</a></p>
        </div>
      </div>
      <div className="visione__navbar-sign">
        <p>Sign In</p>
        <button type="button">SignUp </button>
      </div>
      <div className="visione__navbar-menu"></div>
    </div>
  );
}

export default Navbar;
