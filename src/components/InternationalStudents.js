import React from 'react';
import './InternationalStudents.css';

const InternationalStudents = () => {
  const services = [
    {
      icon: '🌍',
      title: 'Visa Support',
      description: 'Comprehensive visa application assistance and documentation support'
    },
    {
      icon: '🏠',
      title: 'Accommodation',
      description: 'Help finding safe and comfortable housing options near campus'
    },
    {
      icon: '✈️',
      title: 'Airport Pickup',
      description: 'Free airport pickup service for new international students'
    },
    {
      icon: '💬',
      title: 'Free French Classes',
      description: 'All students can enroll in our free FLE (French as a Foreign Language) courses'
    },
    {
      icon: '👥',
      title: 'Student Support',
      description: 'Dedicated international student office for guidance and assistance'
    },
    {
      icon: '🎓',
      title: 'Orientation Program',
      description: 'Comprehensive orientation to help you settle in and succeed'
    }
  ];

  const requirements = [
    {
      title: 'Valid Passport',
      description: 'Passport valid for at least 6 months beyond your intended stay'
    },
    {
      title: 'Student Visa',
      description: 'Apply for a student visa with our support documents'
    },
    {
      title: 'Health Insurance',
      description: 'Mandatory health insurance coverage for the duration of studies'
    },
    {
      title: 'Financial Proof',
      description: 'Proof of sufficient funds to cover tuition and living expenses'
    }
  ];

  return (
    <section id="international" className="international-students">
      <div className="international-hero">
        <div className="container">
          <div className="international-hero-content">
            <h2>International Students</h2>
            <p>Join students from over 50 countries at GI-SMART</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat">
                <span className="stat-number">2000+</span>
                <span className="stat-label">International Students</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Visa Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="international-content">
          <div className="welcome-section">
            <div className="welcome-text">
              <h3>Welcome to GI-SMART</h3>
              <p>
                At GI-SMART, we welcome students from around the world to join our diverse 
                and inclusive community. Our international students bring unique perspectives 
                and enrich our campus culture.
              </p>
              <p>
                We understand that studying abroad can be both exciting and challenging. 
                That's why we provide comprehensive support services to help you succeed 
                academically and personally during your time with us.
              </p>
              <div className="welcome-features">
                <div className="welcome-feature">
                  <span className="feature-check">✓</span>
                  <span>Flexible Admissions - Open entry year-round for February, July, and October intakes</span>
                </div>
                <div className="welcome-feature">
                  <span className="feature-check">✓</span>
                  <span>English-taught programs with French language support</span>
                </div>
                <div className="welcome-feature">
                  <span className="feature-check">✓</span>
                  <span>Career services and job placement assistance</span>
                </div>
              </div>
            </div>
            <div className="welcome-image">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Global Classroom - Many accents, one conversation — a world of perspectives in a single room"
              />
            </div>
          </div>

          <div className="services-section">
            <div className="section-title">
              <h3>Services for International Students</h3>
              <p>We provide comprehensive support to make your transition smooth and successful</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="requirements-section">
            <div className="section-title">
              <h3>Visa & Requirements</h3>
              <p>Important information for international student visa applications</p>
            </div>
            <div className="requirements-grid">
              {requirements.map((req, index) => (
                <div key={index} className="requirement-card">
                  <div className="requirement-number">{index + 1}</div>
                  <h4>{req.title}</h4>
                  <p>{req.description}</p>
                </div>
              ))}
            </div>
            <div className="requirements-note">
              <p>
                <strong>Note:</strong> Our admissions team will provide you with all necessary 
                documents including the unconditional admission letter required for your visa 
                application. We offer dedicated support throughout the visa process.
              </p>
            </div>
          </div>

          <div className="cta-section">
            <div className="cta-card">
              <h3>Ready to Start Your Journey?</h3>
              <p>Join our international community and experience world-class education at GI-SMART</p>
              <div className="cta-buttons">
                <a href="#application" className="btn btn-primary">Apply Now</a>
                <a href="#contact" className="btn btn-secondary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalStudents;

