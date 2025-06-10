import React from 'react';
import Logo from '../components/icons/logo';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <ul className="nav-links">
        <li><a href="#our-work">Our work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#who-we-are">Who we are</a></li>
        <li><a href="#lang">En</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 