import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './About.css';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutSubtitle}</p>
        </motion.div>
        <div className="about-content">
          <motion.div 
            className="about-image-section"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="about-image-main"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Human-Machine Dialogue - Not man versus machine, but minds in conversation with algorithms"
              />
            </motion.div>
            <div className="about-image-grid">
              <motion.div 
                className="about-image-item"
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Library"
                />
              </motion.div>
              <motion.div 
                className="about-image-item"
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Students"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="about-text-section"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>{t.leadingFuture}</h3>
            <p>{t.aboutText1}</p>
            <p>{t.aboutText2}</p>
            <div className="about-features">
              {[
                { icon: '🎓', title: t.worldClassFaculty, desc: t.worldClassFacultyDesc },
                { icon: '🏆', title: t.accreditedPrograms, desc: t.accreditedProgramsDesc },
                { icon: '🌍', title: t.globalNetwork, desc: t.globalNetworkDesc },
                { icon: '💼', title: t.careerSupport, desc: t.careerSupportDesc }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="about-feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/programs" className="btn btn-primary">
                {t.learnMore}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
