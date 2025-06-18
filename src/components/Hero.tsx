import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Hero: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const translations = {
    en: {
      title: 'Juthoor Agency',
      contact: 'Chat with us',
    },
    ar: {
      title: 'وكالة جذور',
      contact: 'تواصل معنا',
    },
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{translations[currentLanguage].title}</h1>
        <a href="https://wa.me/966500410134" target="_blank" rel="noopener noreferrer" className="contact-button">
          {translations[currentLanguage].contact}
        </a>
      </div>
    </section>
  );
};

export default Hero; 