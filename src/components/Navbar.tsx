import React, { useState } from 'react';
import Logo from '../components/icons/logo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

const Navbar: React.FC = () => {
  const { setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as 'en' | 'ar');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo">
          <Logo />
        </div>
        <button className="hamburger-icon" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li><a href="#our-work" onClick={() => setIsMenuOpen(false)}>Our work</a></li>
        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
        <li><a href="#who-we-are" onClick={() => setIsMenuOpen(false)}>Who we are</a></li>
        <li className="language-dropdown">
          <select defaultValue="en" onChange={handleLanguageChange}>
            <option value="en">En</option>
            <option value="ar">العربية</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 