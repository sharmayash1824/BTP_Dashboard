import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/public/JSL-LOGO.jpeg" alt="home" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li className="dropdown">
          <a href="#">More</a>
          <div className="dropdown-content">
            <a href="#">Contact</a>
            <a href="#">Help</a>
            <a href="#">Privacy</a>
          </div>
        </li>
      </ul>
      <div className="profile">
        <button className="my-profile-button">My Profile</button>
      </div>
    </nav>
  );
}

export default Navbar;
