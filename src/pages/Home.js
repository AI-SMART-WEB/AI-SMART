import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
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
    <motion.div
      className="home-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero />
      
      <motion.div variants={sectionVariants}>
        <About />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Programs />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Features />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Testimonials />
      </motion.div>

      {/* Floating particles background */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['#ff6b00', '#00d4ff', '#ff006e', '#00ff88'][Math.floor(Math.random() * 4)]
              } 0%, transparent 70%)`,
              width: `${5 + Math.random() * 10}px`,
              height: `${5 + Math.random() * 10}px`,
              borderRadius: '50%',
              position: 'absolute',
              pointerEvents: 'none',
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
