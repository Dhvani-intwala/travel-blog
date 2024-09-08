import React from 'react';
import './navbar.css';
import logo from './assets/plane1.webp';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1> <img src={logo} alt="LogoImage" className="logo-image" />My Travel World</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#destination">Destination</a></li>
        <li><a href="#galery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;