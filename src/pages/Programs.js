import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PageStyles.css';

const Programs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const programs = [
    {
      id: 0,
      title: 'Bachelor of Artificial Intelligence Design (BAID)',
      description: 'A comprehensive 4-year program combining AI, design, and ethics to create human-centered intelligent systems',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'BAID',
      features: ['AI & Machine Learning', 'Design Thinking', 'Ethics & Policy', 'Creative AI'],
      link: '/baid-program'
    },
    {
      id: 0.5,
      title: 'Master of Science in AI & Strategic Data Systems (AI-SMART)',
      description: '18-month program shaping leaders and innovators capable of directing complex, AI-driven transformations',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '18 Months',
      degree: 'M.Sc AI-SMART',
      features: ['Strategic Leadership', 'Global Specialization', 'Research Integration', 'Career Acceleration'],
      link: '/aismart-program'
    },
    {
      id: 0.7,
      title: 'Bachelor of Business Administration in Tourism and Hospitality Innovation',
      description: 'Prepare for the next generation of smart tourism, luxury experiences, and sustainable hospitality management',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'BBA',
      features: ['Smart Tourism', 'Luxury Experiences', 'Sustainable Hospitality', 'Global Service Ecosystems'],
      link: '/tourism-hospitality-program'
    },
    {
      id: 0.8,
      title: 'Bachelor of Science in Strategic Management',
      description: 'Prepare globally minded leaders who can navigate complex, data-driven organizations',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'B.Sc',
      features: ['Strategic Analysis', 'Financial Literacy', 'Data-Driven Decisions', 'Global Leadership'],
      link: '/strategic-management-program'
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
    <motion.div
      initial="hidden"
      animate="visible"
      className="page-container"
    >
      <div className="page-hero">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Programs</h1>
          <p>Choose from a wide range of accredited programs designed for your success</p>
        </motion.div>
      </div>

      <div className="container">
        <motion.div 
          className="programs-grid-page"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="program-card-page"
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="program-image-page">
                <img 
                  src={program.image} 
                  alt={program.title}
                />
                <div className="program-overlay-page">
                  <span className="program-degree-page">{program.degree}</span>
                </div>
              </div>
              <div className="program-content-page">
                <div className="program-duration-page">{program.duration}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <ul className="program-features">
                  {program.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="program-actions-page">
                  {program.link && (
                    <Link to={program.link} className="program-link-page">
                      Learn More <span>→</span>
                    </Link>
                  )}
                  <Link to="/application" className="btn-apply-program-page">
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Programs;

