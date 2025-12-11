import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Testimonials.css';

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'MBA Graduate, Class of 2022',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'AI-SMART provided me with the skills and network I needed to excel in my career. The faculty is exceptional and the opportunities are endless.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Computer Science Graduate',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'The hands-on learning approach and industry partnerships at AI-SMART gave me a real advantage when entering the job market. Highly recommended!'
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Engineering Student',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'The modern facilities and supportive learning environment at AI-SMART have exceeded all my expectations. I feel prepared for my future career.'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateZ: -5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t.whatStudentsSay}</h2>
          <p>{t.testimonialsDesc}</p>
        </motion.div>
        <motion.div 
          className="testimonials-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                rotateZ: 2,
                scale: 1.05,
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.2)"
              }}
            >
              <motion.div 
                className="testimonial-image"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={testimonial.image} alt={testimonial.name} />
              </motion.div>
              <div className="testimonial-content">
                <div className="testimonial-quote">"</div>
                <p>{testimonial.text}</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
