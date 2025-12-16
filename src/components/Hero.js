import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaAward, FaGlobe, FaUsers } from 'react-icons/fa';
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
            <p className="hero-tagline">Global Intelligence. Human Creativity.</p>
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

      <div className="hero-features">
        <div className="container">
          <div className="features-grid">
            {[
              { 
                icon: <FaGraduationCap />,
                title: t.excellenceInEducation,
                desc: t.excellenceInEducationDesc || 'World-class education programs'
              },
              { 
                icon: <FaAward />,
                title: t.accreditedPrograms || 'Accredited Programs',
                desc: t.accreditedProgramsDesc || 'Internationally recognized degrees'
              },
              { 
                icon: <FaGlobe />,
                title: t.globalNetwork || 'Global Network',
                desc: t.globalNetworkDesc || 'Connect with students worldwide'
              },
              { 
                icon: <FaUsers />,
                title: t.expertFaculty || 'Expert Faculty',
                desc: t.expertFacultyDesc || 'Learn from industry leaders'
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
