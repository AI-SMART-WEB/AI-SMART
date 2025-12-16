import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Features.css';

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  
  const features = [
    {
      icon: '🏛️',
      title: t.modernCampus,
      description: t.modernCampusDesc
    },
    {
      icon: '👨‍🏫',
      title: t.expertFaculty,
      description: t.expertFacultyDesc
    },
    {
      icon: '🌐',
      title: t.globalOpportunities,
      description: t.globalOpportunitiesDesc
    },
    {
      icon: '💡',
      title: t.innovationLabs,
      description: t.innovationLabsDesc
    },
    {
      icon: '🤝',
      title: t.industryPartnerships,
      description: t.industryPartnershipsDesc
    },
    {
      icon: '📚',
      title: t.digitalLibrary,
      description: t.digitalLibraryDesc
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="features" className="features">
      <motion.div 
        className="features-banner"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="banner-content">
            <h2>{t.whyChoose}</h2>
            <p>{t.whyChooseDesc}</p>
          </div>
        </div>
      </motion.div>
      <div className="container">
        <motion.div 
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 50px rgba(0, 47, 95, 0.3)"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div 
                className="feature-icon-wrapper"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <div className="feature-icon">{feature.icon}</div>
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
