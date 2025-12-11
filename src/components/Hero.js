import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaChalkboardTeacher, FaBook, FaBriefcase } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">{t.welcomeTitle}</h1>
            <p className="hero-subtitle">{t.welcomeSubtitle}</p>
            <div className="hero-buttons">
              <Link to="/programs" className="btn btn-primary">
                {t.explorePrograms}
              </Link>
              <Link to="/application" className="btn btn-secondary">
                {t.applyNow}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container">
          <div className="stats-grid">
            {[
              { 
                number: '15,000+', 
                label: t.students, 
                Icon: FaUsers
              },
              { 
                number: '500+', 
                label: t.facultyMembers, 
                Icon: FaChalkboardTeacher
              },
              { 
                number: '50+', 
                label: t.programsCount, 
                Icon: FaBook
              },
              { 
                number: '95%', 
                label: t.employmentRate, 
                Icon: FaBriefcase
              }
            ].map((stat, index) => (
              <div key={index} className="stat-item">
                <stat.Icon className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
