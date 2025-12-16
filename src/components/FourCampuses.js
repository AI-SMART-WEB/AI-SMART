import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './FourCampuses.css';

const FourCampuses = () => {
  const { language } = useLanguage();

  const campuses = [
    {
      id: 1,
      name: 'Paris',
      color: '#0077B6',
      description: 'The creative capital of Europe — design thinking, culture, and advanced AI research',
      specialization: 'AI Design & Cognitive Systems',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Dubai',
      color: '#E6A400',
      description: 'The hub of innovation and entrepreneurship in the smart economy',
      specialization: 'Data Analytics & Business Intelligence',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Germany',
      color: '#3A3A3A',
      description: 'The home of precision engineering and robotics excellence',
      specialization: 'Robotics, Automation & Mechatronics',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Bucharest',
      color: '#6A1B9A',
      description: 'The rising European tech hub for digital transformation and systems integration',
      specialization: 'Systems Innovation & Applied Research',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="campuses" className="four-campuses">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Four Campuses, One Global Identity</h2>
          <p>At GI-SMART, your education transcends borders. Each campus offers a unique cultural and professional context — yet all share a unified academic vision.</p>
        </motion.div>

        <div className="campuses-grid">
          {campuses.map((campus, index) => (
            <motion.div
              key={campus.id}
              className="campus-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="campus-image" style={{ borderTopColor: campus.color }}>
                <img src={campus.image} alt={campus.name} />
                <div className="campus-overlay" style={{ background: `linear-gradient(135deg, ${campus.color}dd 0%, ${campus.color}99 100%)` }}>
                  <h3>{campus.name}</h3>
                </div>
              </div>
              <div className="campus-content">
                <div className="campus-badge" style={{ background: campus.color }}>
                  {campus.specialization}
                </div>
                <p>{campus.description}</p>
                <div className="campus-features">
                  <span className="feature-tag">Global Mobility</span>
                  <span className="feature-tag">Cultural Immersion</span>
                  <span className="feature-tag">Industry Networks</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="campuses-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="cta-text">
            This structure ensures every graduate embodies <strong>global agility</strong> — academically strong, culturally aware, and professionally adaptable.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/programs" className="btn btn-primary">
              Choose Your Anchor Campus
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FourCampuses;

