import React, { useState } from 'react';
import Logo from '../components/icons/logo.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

const Navbar: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    en: {
      ourWork: 'Our work',
      services: 'Services',
      whoWeAre: 'Who we are'
    },
    ar: {
      ourWork: 'أعمالنا',
      services: 'خدماتنا',
      whoWeAre: 'من نحن'
    }
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as 'en' | 'ar');
    // Update document direction based on language
    document.documentElement.dir = event.target.value === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <div className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#our-work" onClick={() => setIsMenuOpen(false)}>{translations[currentLanguage].ourWork}</a></li>
        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>{translations[currentLanguage].services}</a></li>
        <li><a href="#who-we-are" onClick={() => setIsMenuOpen(false)}>{translations[currentLanguage].whoWeAre}</a></li>
        <li className="language-dropdown">
          <select defaultValue={currentLanguage} onChange={handleLanguageChange}>
            <option value="en">En</option>
            <option value="ar">العربية</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 