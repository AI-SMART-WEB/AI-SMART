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
      id: 1,
      title: t.businessAdmin,
      description: t.businessAdminDesc,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '2 Years',
      degree: 'MBA'
    },
    {
      id: 2,
      title: t.computerScience,
      description: t.computerScienceDesc,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'B.Sc / M.Sc'
    },
    {
      id: 3,
      title: t.engineering,
      description: t.engineeringDesc,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'B.Eng / M.Eng'
    },
    {
      id: 4,
      title: t.artsHumanities,
      description: t.artsHumanitiesDesc,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3-4 Years',
      degree: 'B.A / M.A'
    },
    {
      id: 5,
      title: t.medicalSciences,
      description: t.medicalSciencesDesc,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5-6 Years',
      degree: 'M.D / B.Sc'
    },
    {
      id: 6,
      title: t.lawLegal,
      description: t.lawLegalDesc,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3-4 Years',
      degree: 'LL.B / LL.M'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
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
                y: -15,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="program-image">
                <motion.img 
                  src={program.image} 
                  alt={program.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
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
                <motion.div
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/application" className="program-link">
                    {t.learnMore} <span>→</span>
                  </Link>
                </motion.div>
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
