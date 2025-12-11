import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImage = document.querySelector('.hero-image');
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        <div className="hero-slide active">
          <div className="hero-image" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}>
            <div className="hero-overlay"></div>
            <motion.div 
              className="container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="hero-content" variants={itemVariants}>
                <motion.h1 
                  className="hero-title"
                  variants={itemVariants}
                >
                  Welcome to AI-SMART
                </motion.h1>
                <motion.p 
                  className="hero-subtitle"
                  variants={itemVariants}
                >
                  Shaping Tomorrow's Leaders Through Excellence in Education
                </motion.p>
                <motion.div 
                  className="hero-buttons"
                  variants={itemVariants}
                >
                  <motion.a 
                    href="/programs" 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Programs
                  </motion.a>
                  <motion.a 
                    href="/application" 
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="hero-stats">
        <div className="container">
          <motion.div 
            className="stats-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {[
              { number: '15,000+', label: 'Students' },
              { number: '500+', label: 'Faculty Members' },
              { number: '50+', label: 'Programs' },
              { number: '95%', label: 'Employment Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div 
                  className="stat-number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
