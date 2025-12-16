import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './StrategicManagementProgram.css';

const StrategicManagementProgram = () => {
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
      title: 'Strategic Foundations',
      courses: [
        'Principles of Management & Organizational Theory',
        'Microeconomics for Decision-Makers',
        'Business Communication & Academic Writing',
        'Quantitative Methods & Statistics',
        'Introduction to Strategic Thinking',
        'Leadership Psychology & Team Dynamics'
      ]
    },
    {
      year: 2,
      title: 'Analytical & Financial Strategy',
      courses: [
        'Financial Accounting & Analysis',
        'Managerial Finance',
        'Business Intelligence & Data Analytics',
        'Marketing Strategy in the Digital Era',
        'Operations & Supply Chain Strategy',
        'Strategic Decision-Making Simulations'
      ]
    },
    {
      year: 3,
      title: 'Global Strategy & Innovation',
      courses: [
        'Global Economics & Geopolitical Analysis',
        'Strategic Innovation & Change Management',
        'Corporate Governance & Ethics',
        'Digital Transformation Strategy',
        'Sustainability & ESG Leadership',
        'Industry Consulting Project I'
      ]
    },
    {
      year: 4,
      title: 'Advanced Strategic Leadership',
      courses: [
        'Competitive Strategy in the AI Economy',
        'Advanced Data-Driven Decision Systems',
        'Strategic Risk & Crisis Management',
        'Entrepreneurship, Venture Creation & Funding',
        'Capstone Strategy Simulation',
        'Industry Consulting Project II (Thesis-Equivalent)'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="strategic-management-page"
    >
      {/* Hero Section */}
      <div className="program-hero" data-aos="fade-down">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Bachelor of Science in Strategic Management</h1>
            <p className="hero-subtitle">Preparing globally minded leaders who can navigate complex, data-driven organizations</p>
            <div className="hero-badges">
              <span className="badge">4 Years</span>
              <span className="badge">12 Terms</span>
              <span className="badge">Global Focus</span>
              <span className="badge">Data-Driven</span>
            </div>
          </div>
        </div>
      </div>

      <div className="program-container">
        {/* Program Overview */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Program Overview</h2>
          <p className="section-intro">
            The Bachelor of Science in Strategic Management at GI‑SMART is designed for future leaders, strategists, and decision-makers who seek to operate at the intersection of business, data, technology, and global change. This four-year program equips students with analytical rigor, strategic foresight, and leadership capabilities required to navigate complex organizations and rapidly evolving global markets.
          </p>
          
          {/* Key Highlights */}
          <div className="highlights-section">
            <h3 className="highlights-title">Key Highlights</h3>
            <ul className="highlights-list">
              <li>Data-driven strategic decision-making and analytical thinking</li>
              <li>Strong foundation in finance, economics, and operations</li>
              <li>Integration of AI, digital transformation, and ESG principles</li>
              <li>Global perspective with multi-campus exposure</li>
              <li>Industry consulting projects and real-world simulations</li>
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
              <p>Strategic Analysis, Financial Literacy, Technological Innovation</p>
            </div>
            <div className="overview-card">
              <h3>Career Focus</h3>
              <p>Strategy, Consulting, Operations, Innovation, Entrepreneurship</p>
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
                    <div className="course-icon">📊</div>
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
            Graduates are prepared for roles such as Strategy Analyst, Business Consultant, Operations Manager, Innovation Lead, Project Manager, or Entrepreneur, across consulting firms, multinational corporations, startups, and public institutions.
          </p>
          <div className="career-grid">
            <div className="career-card" data-aos="fade-up" data-aos-delay="100">
              <h3>Strategy Analyst</h3>
              <p>Analyze market trends and develop strategic recommendations for organizations</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Business Consultant</h3>
              <p>Provide expert advice to organizations on strategic planning and operations</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="300">
              <h3>Operations Manager</h3>
              <p>Oversee daily operations and optimize organizational efficiency</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="400">
              <h3>Innovation Lead</h3>
              <p>Drive innovation initiatives and digital transformation in organizations</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="500">
              <h3>Project Manager</h3>
              <p>Lead complex projects and strategic initiatives across organizations</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="600">
              <h3>Entrepreneur</h3>
              <p>Launch and manage innovative startups and business ventures</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="program-section features-section" data-aos="fade-up">
          <h2 className="section-title">Key Program Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🌐</div>
              <h3>Global Perspective</h3>
              <p>Navigate complex international business environments</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📈</div>
              <h3>Data-Driven Strategy</h3>
              <p>Leverage analytics and business intelligence for decision-making</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💼</div>
              <h3>Real-World Projects</h3>
              <p>Industry consulting projects with actual organizations</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤖</div>
              <h3>AI & Technology</h3>
              <p>Understand competitive strategy in the AI economy</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌱</div>
              <h3>Sustainability Focus</h3>
              <p>ESG leadership and sustainable business practices</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Strategic Leadership</h3>
              <p>Develop skills to lead organizational transformation</p>
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

export default StrategicManagementProgram;

