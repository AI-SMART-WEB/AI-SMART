import React, { useEffect } from 'react';
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
      id: 1,
      title: 'Business Administration',
      description: 'Comprehensive MBA program designed for future business leaders',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '2 Years',
      degree: 'MBA',
      features: ['Leadership Development', 'Global Business Strategy', 'Networking Opportunities']
    },
    {
      id: 2,
      title: 'Computer Science',
      description: 'Cutting-edge technology and software engineering programs',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'B.Sc / M.Sc',
      features: ['AI & Machine Learning', 'Software Development', 'Cybersecurity']
    },
    {
      id: 3,
      title: 'Engineering',
      description: 'Advanced engineering programs in multiple specializations',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'B.Eng / M.Eng',
      features: ['Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering']
    },
    {
      id: 4,
      title: 'Arts & Humanities',
      description: 'Explore creativity and critical thinking in diverse fields',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3-4 Years',
      degree: 'B.A / M.A',
      features: ['Creative Writing', 'Visual Arts', 'Cultural Studies']
    },
    {
      id: 5,
      title: 'Medical Sciences',
      description: 'Pre-med and health sciences programs for future healthcare professionals',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5-6 Years',
      degree: 'M.D / B.Sc',
      features: ['Clinical Practice', 'Research Opportunities', 'Hospital Partnerships']
    },
    {
      id: 6,
      title: 'Law & Legal Studies',
      description: 'Comprehensive legal education for aspiring lawyers and jurists',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3-4 Years',
      degree: 'LL.B / LL.M',
      features: ['International Law', 'Corporate Law', 'Criminal Justice']
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
                y: -15,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="program-image-page">
                <motion.img 
                  src={program.image} 
                  alt={program.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="program-overlay-page"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="program-degree-page">{program.degree}</span>
                </motion.div>
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
                <motion.a 
                  href="/application" 
                  className="program-link-page"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Programs;

