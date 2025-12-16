import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AISMARTProgram.css';

const AISMARTProgram = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
    window.scrollTo(0, 0);
  }, []);

  const programData = {
    title: 'Master of Science in Artificial Intelligence & Strategic Data Systems (AI-SMART)',
    duration: '18-Month Core Program + 4-Month Optional Research/Industry Extension',
    vision: 'The AI-SMART Master\'s program builds on the BAID foundation or similar backgrounds to shape leaders and innovators capable of directing complex, AI-driven transformations. It\'s designed for those who want to go beyond technical mastery and step into strategic, high-impact leadership in the global AI economy.',
    highlights: [
      {
        title: 'Specialization by Campus',
        items: [
          'Paris: AI Design & Cognitive Systems',
          'Dubai: Data Analytics & Business Intelligence',
          'Germany: Robotics, Automation & Mechatronics',
          'Bucharest: Systems Innovation & Applied Research'
        ]
      },
      {
        title: 'Research & Industry Integration',
        description: 'Collaborate with global partners on live projects, from autonomous systems and AI ethics to sustainable urban analytics.'
      },
      {
        title: 'Flexible Entry & Career Acceleration',
        description: 'Open to graduates from AI, data, engineering, business, and creative technology disciplines.'
      },
      {
        title: 'Global Network',
        description: 'A truly multinational learning community with students and faculty from over 50 countries, ensuring an environment rich in perspectives, cultures, and opportunities.'
      }
    ],
    careers: [
      'AI Architect / Machine Learning Scientist',
      'Data Systems Engineer / Predictive Analyst',
      'Automation & Robotics Consultant',
      'Chief Innovation Officer',
      'AI Policy & Ethics Specialist'
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="aismart-program-page"
    >
      {/* Hero Section */}
      <div className="program-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="program-hero-content"
          >
            <h1>{programData.title}</h1>
            <div className="program-meta">
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{programData.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Format</span>
                <span className="meta-value">Hybrid (Online + In-Lab)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Campuses</span>
                <span className="meta-value">4 Global Locations</span>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hero-actions"
            >
              <Link to="/application" className="btn-apply-now">
                Apply Now
              </Link>
              <Link to="/programs" className="btn-back">
                ← Back to Programs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container">
        {/* Vision Section */}
        <section className="program-section" data-aos="fade-up">
          <h2>Program Vision</h2>
          <p className="vision-text">{programData.vision}</p>
        </section>

        {/* Highlights Section */}
        <section className="program-section" data-aos="fade-up">
          <h2>Program Highlights</h2>
          <div className="highlights-grid">
            {programData.highlights.map((highlight, index) => (
              <div key={index} className="highlight-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3>{highlight.title}</h3>
                {highlight.items ? (
                  <ul className="highlight-list">
                    {highlight.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{highlight.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Career Paths */}
        <section className="program-section" data-aos="fade-up">
          <h2>Career Opportunities</h2>
          <p className="section-intro">
            Graduates are prepared for high-impact positions in the global AI economy:
          </p>
          <div className="careers-grid">
            {programData.careers.map((career, index) => (
              <div key={index} className="career-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="career-icon">🚀</div>
                <h4>{career}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="program-cta" data-aos="fade-up">
          <div className="cta-content">
            <h2>Ready to Lead the AI Revolution?</h2>
            <p>Join the next generation of AI strategists and innovators</p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/application" className="btn-apply-now-large">
                Apply Now
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AISMARTProgram;

