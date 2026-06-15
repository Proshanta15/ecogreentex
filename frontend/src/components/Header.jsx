import React from "react";
import "../styles/header.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav_container">
          <div className="logo-area">
            <img className="logo" src={Logo} alt="GPT LEGACY LTD. Logo" />
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
