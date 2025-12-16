import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './UndergraduateProgramsComparison.css';

const UndergraduateProgramsComparison = () => {
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
      id: 'baid',
      name: 'Bachelor of Artificial Intelligence Design',
      shortName: 'BAID',
      link: '/baid-program',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years / 12 Terms',
      coreFocus: 'AI, ML, Human-AI Design',
      technologyIntensity: 'Very High',
      capstone: 'AI Design Studio',
      careerOrientation: 'Tech & Creative Industries'
    },
    {
      id: 'strategic',
      name: 'Bachelor of Science in Strategic Management',
      shortName: 'B.Sc Strategic Management',
      link: '/strategic-management-program',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years / 12 Terms',
      coreFocus: 'Strategy, Analytics, Leadership',
      technologyIntensity: 'High',
      capstone: 'Industry Consulting Project',
      careerOrientation: 'Corporate & Consulting'
    },
    {
      id: 'tourism',
      name: 'Bachelor of Business Administration in Tourism and Hospitality Innovation',
      shortName: 'BBA Tourism & Hospitality',
      link: '/tourism-hospitality-program',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 Years / 12 Terms',
      coreFocus: 'Tourism, Hospitality, Service Innovation',
      technologyIntensity: 'Medium-High',
      capstone: 'Destination / Hospitality Innovation Project',
      careerOrientation: 'Tourism & Experience Economy'
    }
  ];

  const dimensions = [
    { key: 'duration', label: 'Duration' },
    { key: 'coreFocus', label: 'Core Focus' },
    { key: 'technologyIntensity', label: 'Technology Intensity' },
    { key: 'capstone', label: 'Capstone' },
    { key: 'careerOrientation', label: 'Career Orientation' }
  ];

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 'Very High':
        return '#29ABE2';
      case 'High':
        return '#0077B6';
      case 'Medium-High':
        return '#FFC300';
      default:
        return '#666';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="comparison-page"
    >
      {/* Hero Section */}
      <div className="comparison-hero" data-aos="fade-down">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>GI-SMART Undergraduate Programs – Comparative Matrix</h1>
            <p className="hero-subtitle">Side-by-side comparison of our three flagship undergraduate programs</p>
          </div>
        </div>
      </div>

      <div className="comparison-container">
        {/* Introduction */}
        <section className="intro-section" data-aos="fade-up">
          <p className="intro-text">
            This document provides a side-by-side comparison of GI-SMART's three flagship undergraduate programs, highlighting their academic focus, skill development, and career alignment.
          </p>
        </section>

        {/* Comparison Matrix */}
        <section className="matrix-section" data-aos="fade-up">
          <div className="comparison-table">
            {/* Header Row */}
            <div className="table-header">
              <div className="header-cell dimension-cell">Dimension</div>
              {programs.map((program, index) => (
                <div key={program.id} className="header-cell program-cell" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="program-header-image">
                    <img src={program.image} alt={program.name} />
                  </div>
                  <h3>{program.shortName}</h3>
                  <p className="program-full-name">{program.name}</p>
                </div>
              ))}
            </div>

            {/* Data Rows */}
            {dimensions.map((dimension, dimIndex) => (
              <div key={dimension.key} className="table-row" data-aos="fade-up" data-aos-delay={dimIndex * 50}>
                <div className="dimension-cell">
                  <strong>{dimension.label}</strong>
                </div>
                {programs.map((program, progIndex) => (
                  <div key={`${dimension.key}-${program.id}`} className="data-cell">
                    {dimension.key === 'technologyIntensity' ? (
                      <span 
                        className="intensity-badge"
                        style={{ backgroundColor: getIntensityColor(program[dimension.key]) }}
                      >
                        {program[dimension.key]}
                      </span>
                    ) : (
                      <span>{program[dimension.key]}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Program Cards */}
        <section className="programs-cards-section" data-aos="fade-up">
          <h2 className="section-title">Explore Each Program</h2>
          <div className="programs-cards-grid">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                className="program-comparison-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-image">
                  <img src={program.image} alt={program.name} />
                </div>
                <div className="card-content">
                  <h3>{program.shortName}</h3>
                  <p className="card-description">{program.name}</p>
                  <div className="card-details">
                    <div className="detail-row">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{program.duration}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Focus:</span>
                      <span className="detail-value">{program.coreFocus}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Tech Intensity:</span>
                      <span 
                        className="detail-value intensity-badge-small"
                        style={{ backgroundColor: getIntensityColor(program.technologyIntensity) }}
                      >
                        {program.technologyIntensity}
                      </span>
                    </div>
                  </div>
                  <div className="card-actions">
                    <Link to={program.link} className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="comparison-cta" data-aos="fade-up">
          <h2>Ready to Choose Your Path?</h2>
          <p>Explore our programs in detail and find the one that aligns with your career goals</p>
          <div className="cta-buttons">
            <Link to="/programs" className="btn btn-primary">View All Programs</Link>
            <Link to="/application" className="btn btn-secondary">Apply Now</Link>
            <Link to="/contact" className="btn btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UndergraduateProgramsComparison;

