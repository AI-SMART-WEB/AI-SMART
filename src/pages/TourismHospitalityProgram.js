import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TourismHospitalityProgram.css';

const TourismHospitalityProgram = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
    window.scrollTo(0, 0);
  }, []);

  const years = [
    {
      year: 1,
      title: 'Foundations of Tourism & Service Excellence',
      courses: [
        'Introduction to Tourism & Hospitality Industry',
        'Principles of Management & Service Leadership',
        'Business Communication & Multicultural Awareness',
        'Customer Experience Design',
        'Marketing for Tourism & Hospitality',
        'Food & Beverage Management Fundamentals'
      ]
    },
    {
      year: 2,
      title: 'Operational Management & Sustainability',
      courses: [
        'Front Office & Accommodation Management',
        'Hospitality Accounting & Financial Control',
        'Sustainable Tourism & Environmental Practices',
        'Event Management & Experiential Tourism',
        'Technology in Hospitality (AI, VR & Smart Systems)',
        'Tourism Law, Ethics & Policy'
      ]
    },
    {
      year: 3,
      title: 'Innovation & International Tourism',
      courses: [
        'Destination Management & Development',
        'E-Tourism & Digital Marketing Strategies',
        'Revenue & Yield Management',
        'Cross-Cultural Management & International Business',
        'Entrepreneurship in Hospitality',
        'Applied Research Project I'
      ]
    },
    {
      year: 4,
      title: 'Global Leadership & Strategic Operations',
      courses: [
        'Strategic Hospitality Management',
        'Advanced Customer Analytics & Service Automation',
        'Innovation in Luxury & Experiential Travel',
        'Emerging Technologies in Tourism (AR/VR/IoT)',
        'Capstone Project – Destination Revitalization Plan',
        'Applied Research Project II (Thesis-Equivalent)'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="tourism-hospitality-page"
    >
      {/* Hero Section */}
      <div className="program-hero" data-aos="fade-down">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Bachelor of Business Administration in Tourism and Hospitality Innovation</h1>
            <p className="hero-subtitle">Preparing professionals for the next generation of smart tourism, luxury experiences, and sustainable hospitality management</p>
            <div className="hero-badges">
              <span className="badge">4 Years</span>
              <span className="badge">12 Terms</span>
              <span className="badge">Global Campuses</span>
              <span className="badge">Innovation Focus</span>
            </div>
          </div>
        </div>
      </div>

      <div className="program-container">
        {/* Program Overview */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Program Overview</h2>
          <p className="section-intro">
            The Bachelor of Business Administration in Tourism and Hospitality Innovation prepares students for leadership roles in one of the world's most dynamic and global industries. This program blends hospitality management, digital innovation, sustainability, and experiential design to train professionals capable of shaping the future of tourism and service excellence.
          </p>
          
          {/* Key Highlights */}
          <div className="highlights-section">
            <h3 className="highlights-title">Key Highlights</h3>
            <ul className="highlights-list">
              <li>Focus on smart tourism, AI, and digital hospitality systems</li>
              <li>Strong emphasis on customer experience and service design</li>
              <li>Sustainability, ethics, and responsible tourism practices</li>
              <li>Hands-on projects in destination management and events</li>
              <li>International exposure and multicultural learning environment</li>
            </ul>
          </div>

          <div className="overview-grid">
            <div className="overview-card">
              <h3>Duration</h3>
              <p>4 Years | 12 Academic Terms (3 Terms per Year)</p>
            </div>
            <div className="overview-card">
              <h3>Term Length</h3>
              <p>Each term lasts 13 weeks</p>
            </div>
            <div className="overview-card">
              <h3>Focus Areas</h3>
              <p>Smart Tourism, Luxury Experiences, Sustainable Hospitality</p>
            </div>
            <div className="overview-card">
              <h3>Global Exposure</h3>
              <p>Multi-campus experience across four continents</p>
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="program-section structure-section" data-aos="fade-up">
          <h2 className="section-title">Program Structure</h2>
          
          {years.map((yearData, index) => (
            <div key={index} className="year-section">
              <h3 className="year-title">Year {yearData.year} – {yearData.title}</h3>
              <div className="courses-grid">
                {yearData.courses.map((course, courseIndex) => (
                  <div 
                    key={courseIndex} 
                    className="course-card"
                    data-aos="fade-up"
                    data-aos-delay={courseIndex * 50}
                  >
                    <div className="course-icon">📚</div>
                    <p className="course-name">{course}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Career Pathways */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Career Pathways</h2>
          <p className="section-intro">
            Graduates pursue careers in Hotel and Resort Management, Tourism Development, Event and Experience Management, Destination Marketing, Luxury Travel, and Hospitality Entrepreneurship.
          </p>
          <div className="career-grid">
            <div className="career-card" data-aos="fade-up" data-aos-delay="100">
              <h3>Hotel and Resort Management</h3>
              <p>Lead operations in luxury and boutique hotels worldwide</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Tourism Development</h3>
              <p>Shape sustainable tourism development and growth strategies</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="300">
              <h3>Event and Experience Management</h3>
              <p>Design and execute memorable events and experiences</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="400">
              <h3>Destination Marketing</h3>
              <p>Promote destinations through innovative marketing strategies</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="500">
              <h3>Luxury Travel</h3>
              <p>Curate exclusive and high-end travel experiences</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="600">
              <h3>Hospitality Entrepreneurship</h3>
              <p>Launch and manage innovative hospitality ventures</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="program-section features-section" data-aos="fade-up">
          <h2 className="section-title">Key Program Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h3>Global Perspective</h3>
              <p>Multi-campus exposure across four continents</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💡</div>
              <h3>Innovation Focus</h3>
              <p>Integration of AI, VR, and smart systems in hospitality</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>Environmental practices and sustainable tourism principles</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Real-World Projects</h3>
              <p>Capstone projects with real destination revitalization plans</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h3>Industry Partnerships</h3>
              <p>Collaborations with leading hospitality and tourism organizations</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Analytics & Technology</h3>
              <p>Advanced customer analytics and service automation</p>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <div className="program-actions" data-aos="fade-up">
          <Link to="/application" className="btn btn-primary">Apply Now</Link>
          <Link to="/programs" className="btn btn-secondary">Back to Programs</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TourismHospitalityProgram;

