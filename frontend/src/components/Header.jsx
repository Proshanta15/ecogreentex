import React from 'react'
import '../styles/header.css'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="container">
    <nav className="navbar">
      <div className="logo-area">
        <img class="logo" src={Logo} alt="GPT LEGACY LTD. Logo" />
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
    </div>
  )
}

export default Header
