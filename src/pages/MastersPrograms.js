import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MastersPrograms.css';

const MastersPrograms = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      id: 1,
      title: 'Master of Science in Applied Artificial Intelligence & Data Systems',
      shortTitle: 'Master of Science in Artificial Intelligence',
      description: 'Next-generation graduate program bridging AI, data engineering, robotics, and innovation. Designed for leaders and innovators capable of directing complex, AI-driven transformations.',
      duration: '2 Years',
      credits: '120 ECTS',
      delivery: 'Hybrid (Dubai & Paris)',
      link: '/aismart-msc',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Master of Science in Strategic Management & Intelligent Decision Systems',
      shortTitle: 'Master of Science in Strategic Management & Intelligent Decision Systems',
      description: 'Advanced program integrating strategic management, data analytics, and intelligent decision-making systems for executive-level leadership roles.',
      duration: '18 Months',
      credits: '90 ECTS',
      delivery: 'Global Campuses',
      link: '/strategic-management-msc',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="masters-programs-page"
    >
      {/* Hero Section */}
      <div className="masters-hero" data-aos="fade-down">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>GI-SMART Master's Academic Portfolio</h1>
            <p className="hero-subtitle">Advanced graduate programs emphasizing analytics, ethical leadership, global relevance, and intelligent decision-making</p>
          </div>
        </div>
      </div>

      <div className="masters-container">
        {/* Graduate Philosophy */}
        <section className="philosophy-section" data-aos="fade-up">
          <h2 className="section-title">Graduate Philosophy</h2>
          <p className="philosophy-text">
            GI-SMART Master's programs emphasize <strong>advanced analytics</strong>, <strong>ethical leadership</strong>, <strong>global relevance</strong>, and <strong>intelligent decision-making</strong>. Our graduate education prepares students to lead in AI-driven and data-intensive environments while maintaining ethical standards and global perspectives.
          </p>
        </section>

        {/* Programs Grid */}
        <section className="programs-section" data-aos="fade-up">
          <h2 className="section-title">Programs</h2>
          <div className="masters-programs-grid">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                className="masters-program-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="program-image">
                  <img src={program.image} alt={program.title} />
                  <div className="program-overlay">
                    <span className="program-badge">MSc</span>
                  </div>
                </div>
                <div className="program-content">
                  <h3>{program.shortTitle}</h3>
                  <p className="program-description">{program.description}</p>
                  <div className="program-details">
                    <div className="detail-item">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{program.duration}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Credits:</span>
                      <span className="detail-value">{program.credits}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Delivery:</span>
                      <span className="detail-value">{program.delivery}</span>
                    </div>
                  </div>
                  <div className="program-actions">
                    <Link to={program.link} className="btn btn-primary">
                      Learn More
                    </Link>
                    <Link to="/application" className="btn btn-secondary">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Graduate Outcomes */}
        <section className="outcomes-section" data-aos="fade-up">
          <h2 className="section-title">Graduate Outcomes</h2>
          <div className="outcomes-grid">
            <div className="outcome-card" data-aos="fade-up" data-aos-delay="100">
              <div className="outcome-icon">📊</div>
              <h3>Advanced Analytical Capabilities</h3>
              <p>Master data-driven decision intelligence and advanced analytical methodologies</p>
            </div>
            <div className="outcome-card" data-aos="fade-up" data-aos-delay="200">
              <div className="outcome-icon">🎯</div>
              <h3>AI-Driven Leadership</h3>
              <p>Lead effectively in AI-driven and data-intensive organizational environments</p>
            </div>
            <div className="outcome-card" data-aos="fade-up" data-aos-delay="300">
              <div className="outcome-icon">🌍</div>
              <h3>Global Employability</h3>
              <p>Excel across public and private sectors with internationally recognized credentials</p>
            </div>
            <div className="outcome-card" data-aos="fade-up" data-aos-delay="400">
              <div className="outcome-icon">🎓</div>
              <h3>Advanced Pathways</h3>
              <p>Prepare for doctoral studies or executive leadership roles in global organizations</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="masters-cta" data-aos="fade-up">
          <h2>Ready to Advance Your Career?</h2>
          <p>Join GI-SMART's Master's programs and become a leader in the intelligent age</p>
          <div className="cta-buttons">
            <Link to="/application" className="btn btn-primary">Apply Now</Link>
            <Link to="/programs" className="btn btn-secondary">View All Programs</Link>
            <Link to="/contact" className="btn btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MastersPrograms;

