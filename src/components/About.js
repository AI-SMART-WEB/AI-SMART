import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
          <h2>About AI-SMART</h2>
          <p>Excellence in Education Since 1990</p>
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="AI-SMART Campus"
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
            <h3>Leading the Future of Education</h3>
            <p>
              AI-SMART is a premier educational institution dedicated to providing world-class 
              education and fostering innovation. With over 30 years of excellence, we have 
              established ourselves as a leader in academic achievement and student success.
            </p>
            <p>
              Our mission is to empower students with the knowledge, skills, and values needed 
              to excel in their chosen fields and make a positive impact on society. We combine 
              traditional academic rigor with modern teaching methodologies and cutting-edge 
              technology.
            </p>
            <div className="about-features">
              {[
                { icon: '🎓', title: 'World-Class Faculty', desc: 'Experienced professors and industry experts' },
                { icon: '🏆', title: 'Accredited Programs', desc: 'Internationally recognized degrees and certifications' },
                { icon: '🌍', title: 'Global Network', desc: 'Partnerships with leading universities worldwide' },
                { icon: '💼', title: 'Career Support', desc: 'Dedicated career services and job placement assistance' }
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
            <motion.a 
              href="/programs" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
