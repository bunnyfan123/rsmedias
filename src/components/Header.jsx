import React from 'react';

const Header = () => (
  <header id="header">
    <div className="container">
      <nav className="navbar">
        <a href="index.html" className="logo">
          <img src="/logo_rs.png" alt="RS Medias Logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#knowus">Get to Know Us</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
