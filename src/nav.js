import React from 'react';
import './navbar.css';
import logo from './assets/logo(1).png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="LogoImage" className="logo-image" />
      </div>
      <ul className="navbar-link">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#destination">Destination</a></li>
        <li><a href="#galery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;