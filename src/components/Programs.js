import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Programs.css';

const Programs = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  
  const programs = [
    {
      id: 0,
      title: 'Bachelor of Artificial Intelligence Design (BAID)',
      description: 'A comprehensive 4-year program combining AI, design, and ethics to create human-centered intelligent systems',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'BAID',
      link: '/baid-program'
    },
    {
      id: 0.5,
      title: 'Master of Science in AI & Strategic Data Systems (AI-SMART)',
      description: '18-month program shaping leaders and innovators capable of directing complex, AI-driven transformations',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '18 Months',
      degree: 'M.Sc AI-SMART',
      link: '/aismart-program'
    },
    {
      id: 0.8,
      title: 'Bachelor of Science in Strategic Management',
      description: 'Prepare globally minded leaders who can navigate complex, data-driven organizations',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'B.Sc',
      link: '/strategic-management-program'
    },
    {
      id: 0.7,
      title: 'Bachelor of Business Administration in Tourism and Hospitality Innovation',
      description: 'Prepare for the next generation of smart tourism, luxury experiences, and sustainable hospitality management',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'BBA',
      link: '/tourism-hospitality-program'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="programs" className="programs">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t.ourPrograms}</h2>
          <p>{t.programsSubtitle}</p>
        </motion.div>
        <motion.div 
          className="programs-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="program-card"
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="program-image">
                <img 
                  src={program.image} 
                  alt={program.title}
                />
                <motion.div 
                  className="program-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="program-degree">{program.degree}</span>
                </motion.div>
              </div>
              <div className="program-content">
                <div className="program-duration">{program.duration}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="program-actions">
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={program.link || "/application"} className="program-link">
                      {t.learnMore} <span>→</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/application" className="btn-apply-program">
                      Apply Now
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="programs-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="btn btn-primary">
              {t.viewAllPrograms}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
