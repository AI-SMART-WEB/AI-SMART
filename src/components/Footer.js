import React from 'react';
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
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>{t.quickLinks}</h4>
            <ul>
              <li><a href="/">{t.home}</a></li>
              <li><a href="/about">{t.aboutUs}</a></li>
              <li><a href="/programs">{t.programs}</a></li>
              <li><a href="/admissions">{t.admissions}</a></li>
              <li><a href="/gallery">{t.gallery}</a></li>
              <li><a href="/contact">{t.contact}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t.programs}</h4>
            <ul>
              <li><a href="/programs">{t.businessAdmin}</a></li>
              <li><a href="/programs">{t.computerScience}</a></li>
              <li><a href="/programs">{t.engineering}</a></li>
              <li><a href="/programs">{t.artsHumanities}</a></li>
              <li><a href="/programs">{t.medicalSciences}</a></li>
              <li><a href="/programs">{t.lawLegal}</a></li>
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

