import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AI-SMART</h3>
            <p>{t.footerDesc}</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" rel="noopener noreferrer">📘</a>
              <a href="#" aria-label="Twitter" rel="noopener noreferrer">🐦</a>
              <a href="#" aria-label="Instagram" rel="noopener noreferrer">📷</a>
              <a href="#" aria-label="LinkedIn" rel="noopener noreferrer">💼</a>
              <a href="#" aria-label="YouTube" rel="noopener noreferrer">📺</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>{t.quickLinks}</h4>
            <ul>
              <li><Link to="/">{t.home}</Link></li>
              <li><Link to="/about">{t.aboutUs}</Link></li>
              <li><Link to="/programs">{t.programs}</Link></li>
              <li><Link to="/admissions">{t.admissions}</Link></li>
              <li><Link to="/gallery">{t.gallery}</Link></li>
              <li><Link to="/contact">{t.contact}</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t.programs}</h4>
            <ul>
              <li><Link to="/programs">{t.businessAdmin}</Link></li>
              <li><Link to="/programs">{t.computerScience}</Link></li>
              <li><Link to="/programs">{t.engineering}</Link></li>
              <li><Link to="/programs">{t.artsHumanities}</Link></li>
              <li><Link to="/programs">{t.medicalSciences}</Link></li>
              <li><Link to="/programs">{t.lawLegal}</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t.contactInfo}</h4>
            <ul className="contact-info">
              <li>📍 {t.address}</li>
              <li>📞 {t.phone}</li>
              <li>📧 {t.email}</li>
              <li>🕒 {t.officeHours}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AI-SMART. {t.allRightsReserved}</p>
          <div className="footer-links">
            <a href="#">{t.privacyPolicy}</a>
            <a href="#">{t.termsOfService}</a>
            <a href="#">{t.cookiePolicy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

