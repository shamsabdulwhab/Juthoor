import React from 'react';
import Logo from '../components/icons/logo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

const Navbar: React.FC = () => {
  const { setLanguage } = useLanguage();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as 'en' | 'ar');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <ul className="nav-links">
        <li><a href="#our-work">Our work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#who-we-are">Who we are</a></li>
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