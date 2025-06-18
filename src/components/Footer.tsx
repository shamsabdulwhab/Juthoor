import React from 'react';
import Logo from '../components/icons/logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Send Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message"></textarea>
            </div>
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>

        <div className="footer-social">
          <h3>Social Media</h3>
          <ul>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#tiktok">TikTok</a></li>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#whatsapp">WhatsApp</a></li>
          </ul>
          <p>juthooragency@gmail.com</p>
          <p>+312456789</p>
        </div>

        <div className="footer-logo-section">
          {/* Replace with your actual logo image or SVG */}
           <Logo height="12rem" />
          <p className="agency-name">Juthoor Agency</p>
        </div>
      </div>
      <div className="footer-bottom">
        {/* Add any copyright or other bottom text if needed */}
      </div>
    </footer>
  );
};

export default Footer; 