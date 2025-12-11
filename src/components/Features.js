import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🏛️',
      title: 'Modern Campus',
      description: 'State-of-the-art facilities with cutting-edge technology and resources'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Faculty',
      description: 'Learn from industry leaders and renowned academic professionals'
    },
    {
      icon: '🌐',
      title: 'Global Opportunities',
      description: 'Study abroad programs and international exchange opportunities'
    },
    {
      icon: '💡',
      title: 'Innovation Labs',
      description: 'Access to research labs and innovation centers for hands-on learning'
    },
    {
      icon: '🤝',
      title: 'Industry Partnerships',
      description: 'Strong connections with leading companies for internships and placements'
    },
    {
      icon: '📚',
      title: 'Digital Library',
      description: 'Extensive digital resources and 24/7 access to online materials'
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
            <h2>Why Choose AI-SMART?</h2>
            <p>Experience excellence in education with world-class facilities and opportunities</p>
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
                boxShadow: "0 20px 50px rgba(0, 102, 204, 0.3)"
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
