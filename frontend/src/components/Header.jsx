import React, { useState, useEffect } from "react";
import "../styles/header.css"; // Make sure this path is correct
import Logo from "../assets/logo.png"; // Make sure this path is correct

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="nav_container">
          <div className="logo-area">
            <img className="logo" src={Logo} alt="GPT LEGACY LTD. Logo" />
          </div>
          
          <button 
            className={`hamburger ${isMenuOpen ? "active" : ""}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}></div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <img className="mobile-logo" src={Logo} alt="GPT LEGACY LTD. Logo" />
          <button className="close-menu" onClick={closeMenu}>
            <span className="close-icon">×</span>
          </button>
        </div>
        <div className="mobile-nav-links">
          <a href="#" onClick={closeMenu}>Home</a>
          <a href="#" onClick={closeMenu}>About Us</a>
          <a href="#" onClick={closeMenu}>Services</a>
          <a href="#" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;