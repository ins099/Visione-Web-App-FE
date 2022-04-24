import React from "react";
import ai from "../../assets/ai.png";
import { Navbar } from "../../components";
import "./header.css";

const Header = () => (
  <div className="visione__header-background">
    <Navbar />
    <div className="visione__header section__padding" id="home">
      <div className="visione__header-content">
        <h1 className="">We&apos;re Focused On OpenCV Projects</h1>
        <p>
          lorem ipsum doller lorem ipsum doller lorem ipsum doller lorem ipsum
          doller{" "}
        </p>
        <button>GET IN TOUCH</button>
      </div>
    </div>
  </div>
);

export default Header;
