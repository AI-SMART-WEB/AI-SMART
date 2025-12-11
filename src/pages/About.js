import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PageStyles.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="page-container"
    >
      <div className="page-hero">
        <motion.div 
          className="container"
          variants={fadeInUp}
        >
          <h1>About AI-SMART</h1>
          <p>Excellence in Education Since 1990</p>
        </motion.div>
      </div>

      <div className="container">
        <motion.section 
          className="about-section"
          data-aos="fade-up"
          variants={fadeInUp}
        >
          <div className="content-grid">
            <div className="content-text">
              <h2>Leading the Future of Education</h2>
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
            </div>
            <motion.div 
              className="content-image"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Campus"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="values-section"
          data-aos="fade-up"
        >
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {[
              { icon: '🎓', title: 'Excellence', desc: 'Commitment to highest academic standards' },
              { icon: '🌍', title: 'Innovation', desc: 'Embracing new technologies and methods' },
              { icon: '🤝', title: 'Integrity', desc: 'Ethical behavior and transparency' },
              { icon: '💡', title: 'Diversity', desc: 'Inclusive environment for all students' }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 102, 204, 0.3)"
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="stats-section"
          data-aos="zoom-in"
        >
          <div className="stats-grid">
            {[
              { number: '30+', label: 'Years of Excellence' },
              { number: '15,000+', label: 'Alumni Worldwide' },
              { number: '500+', label: 'Expert Faculty' },
              { number: '50+', label: 'Countries Represented' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.div
                  className="stat-number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;

