import React from 'react';
import { motion } from 'framer-motion';
import './Programs.css';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Business Administration',
      description: 'Comprehensive MBA program designed for future business leaders',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '2 Years',
      degree: 'MBA'
    },
    {
      id: 2,
      title: 'Computer Science',
      description: 'Cutting-edge technology and software engineering programs',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'B.Sc / M.Sc'
    },
    {
      id: 3,
      title: 'Engineering',
      description: 'Advanced engineering programs in multiple specializations',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years',
      degree: 'B.Eng / M.Eng'
    },
    {
      id: 4,
      title: 'Arts & Humanities',
      description: 'Explore creativity and critical thinking in diverse fields',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3-4 Years',
      degree: 'B.A / M.A'
    },
    {
      id: 5,
      title: 'Medical Sciences',
      description: 'Pre-med and health sciences programs for future healthcare professionals',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5-6 Years',
      degree: 'M.D / B.Sc'
    },
    {
      id: 6,
      title: 'Law & Legal Studies',
      description: 'Comprehensive legal education for aspiring lawyers and jurists',
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
          <h2>Our Programs</h2>
          <p>Choose from a wide range of accredited programs designed for your success</p>
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
                <motion.a 
                  href="/application" 
                  className="program-link"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <span>→</span>
                </motion.a>
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
          <motion.a 
            href="/contact" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Programs
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
