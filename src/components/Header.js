import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-banner">
        <div className="container">
          <div className="top-banner-content">
            <div className="top-banner-left">
              <span>📧 info@ai-smart.edu</span>
              <span>📞 +33 1 23 45 67 89</span>
            </div>
            <div className="top-banner-right">
              <Link to="/application">{t.applyNow}</Link>
              <Link to="/student-portal">{t.studentPortal}</Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <h1>AI-SMART</h1>
              <span className="logo-tagline">{t.excellenceInEducation}</span>
            </div>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>{t.home}</Link></li>
              <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>{t.about}</Link></li>
              <li><Link to="/programs" onClick={() => setIsMobileMenuOpen(false)}>{t.programs}</Link></li>
              <li><Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>{t.admissions}</Link></li>
              <li><Link to="/international" onClick={() => setIsMobileMenuOpen(false)}>{t.international}</Link></li>
              <li><Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>{t.gallery}</Link></li>
              <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>{t.contact}</Link></li>
              <li><Link to="/application" className="btn-apply" onClick={() => setIsMobileMenuOpen(false)}>{t.applyNow}</Link></li>
            </ul>
            <div 
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

