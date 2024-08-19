import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>My Travel World</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Destination</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;