import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './StrategicManagementMSc.css';

const StrategicManagementMSc = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
    window.scrollTo(0, 0);
  }, []);

  const terms = [
    {
      term: 1,
      title: 'Strategic Foundations',
      period: 'September – December',
      credits: 12,
      description: 'This term establishes the strategic, economic, and managerial foundations required for advanced study. It aligns students from diverse academic backgrounds and develops a shared strategic language.',
      courses: [
        'Advanced Strategic Analysis',
        'Managerial Economics for Decision Makers',
        'Organizational Strategy & Competitive Positioning',
        'Strategic Leadership & Organizational Behavior'
      ]
    },
    {
      term: 2,
      title: 'Analytics, Finance & Decision Systems',
      period: 'January – April',
      credits: 12,
      description: 'This term focuses on analytical rigor and decision intelligence, equipping students with quantitative, financial, and data-driven tools essential for strategic roles.',
      courses: [
        'Financial Strategy & Value Creation',
        'Data Analytics for Strategic Management',
        'Quantitative Methods & Business Statistics',
        'Decision Intelligence & Strategic Modeling'
      ]
    },
    {
      term: 3,
      title: 'Internship / Research / Strategic Project',
      period: 'May – September',
      credits: 12,
      description: 'Students complete a full-time professional or research engagement, applying their knowledge in real-world contexts. This term strengthens employability, professional networks, and applied strategic competence.',
      isInternship: true,
      options: [
        'Industry Internship',
        'Research Thesis',
        'Applied Strategic Consulting Project'
      ]
    },
    {
      term: 4,
      title: 'AI, Governance, Innovation & Foresight',
      period: 'September – December',
      credits: 12,
      description: 'In the final academic term, students synthesize theory and practice through advanced studies in artificial intelligence, innovation, governance, and future-oriented strategy.',
      courses: [
        'AI & Digital Transformation Strategy',
        'Ethics, Governance & Responsible Leadership',
        'Innovation, Entrepreneurship & Strategic Renewal',
        'Competitive Intelligence, Foresight & Scenario Planning'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="strategic-management-msc-page"
    >
      {/* Hero Section */}
      <div className="program-hero" data-aos="fade-down">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Master of Science in Strategic Management & Intelligent Decision Systems</h1>
            <p className="hero-subtitle">A future-oriented graduate program designed to prepare strategic leaders for complex, data-driven, and AI-influenced decision environments</p>
            <div className="hero-badges">
              <span className="badge">4 Terms</span>
              <span className="badge">48 Credits</span>
              <span className="badge">18 Months</span>
              <span className="badge">Global Campuses</span>
            </div>
          </div>
        </div>
      </div>

      <div className="program-container">
        {/* Program Overview */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Program Overview</h2>
          <div className="strategic-concept-box">
            <h3 className="concept-title">Program Vision</h3>
            <p className="concept-text">
              The Master of Science in Strategic Management & Intelligent Decision Systems is a future-oriented graduate program designed to prepare strategic leaders for complex, data-driven, and AI-influenced decision environments. The program combines strategic management foundations, advanced analytics, real-world professional experience, and forward-looking studies in AI, governance, and innovation.
            </p>
          </div>
          <p className="section-intro">
            The program is designed for future leaders, strategists, and decision-makers who seek to operate at the intersection of business, data, technology, and global change. It equips students with analytical rigor, strategic foresight, and leadership capabilities required to navigate complex organizations and rapidly evolving global markets.
          </p>
          <div className="program-stats">
            <div className="stat-item">
              <div className="stat-value">4</div>
              <div className="stat-label">Academic Terms</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">48</div>
              <div className="stat-label">Total Credits</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">12</div>
              <div className="stat-label">Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3+1</div>
              <div className="stat-label">Taught + Internship Terms</div>
            </div>
          </div>
          <div className="overview-grid">
            <div className="overview-card">
              <h3>Structure</h3>
              <p>3 Taught Terms + 1 Internship/Research Term</p>
            </div>
            <div className="overview-card">
              <h3>Credits per Course</h3>
              <p>3 credits per course</p>
            </div>
            <div className="overview-card">
              <h3>Internship/Research</h3>
              <p>12 credits</p>
            </div>
            <div className="overview-card">
              <h3>Graduation</h3>
              <p>Summer following the final academic term</p>
            </div>
          </div>
        </section>

        {/* Academic Structure */}
        <section className="program-section structure-section" data-aos="fade-up">
          <h2 className="section-title">MSc Academic Structure</h2>
          <p className="section-intro">
            The MSc is structured around core modules, specialization tracks, and a strategic capstone.
          </p>
          
          {/* Core Modules */}
          <div className="modules-section">
            <h3 className="modules-title">Core Modules</h3>
            <div className="modules-grid">
              <div className="module-card" data-aos="fade-up" data-aos-delay="100">
                <div className="module-icon">📊</div>
                <h4>Advanced Strategic Analysis & Competitive Intelligence</h4>
              </div>
              <div className="module-card" data-aos="fade-up" data-aos-delay="200">
                <div className="module-icon">🌐</div>
                <h4>Managerial Economics & Global Market Dynamics</h4>
              </div>
              <div className="module-card" data-aos="fade-up" data-aos-delay="300">
                <div className="module-icon">💰</div>
                <h4>Advanced Financial Strategy & Value Creation</h4>
              </div>
              <div className="module-card" data-aos="fade-up" data-aos-delay="400">
                <div className="module-icon">📈</div>
                <h4>Data Analytics for Strategic Decision-Making</h4>
              </div>
              <div className="module-card" data-aos="fade-up" data-aos-delay="500">
                <div className="module-icon">🤖</div>
                <h4>AI, Automation & Organizational Transformation</h4>
              </div>
              <div className="module-card" data-aos="fade-up" data-aos-delay="600">
                <div className="module-icon">⚖️</div>
                <h4>Ethics, Governance & Responsible Leadership</h4>
              </div>
            </div>
          </div>

          {/* Specialization Tracks */}
          <div className="specialization-section">
            <h3 className="specialization-title">Specialization Tracks</h3>
            <div className="specialization-grid">
              <div className="specialization-card" data-aos="fade-up" data-aos-delay="100">
                <div className="track-icon">🏢</div>
                <h4>Corporate & Competitive Strategy</h4>
              </div>
              <div className="specialization-card" data-aos="fade-up" data-aos-delay="200">
                <div className="track-icon">📊</div>
                <h4>Strategy, Analytics & Decision Intelligence</h4>
              </div>
              <div className="specialization-card" data-aos="fade-up" data-aos-delay="300">
                <div className="track-icon">💡</div>
                <h4>Innovation, Entrepreneurship & Digital Strategy</h4>
              </div>
              <div className="specialization-card" data-aos="fade-up" data-aos-delay="400">
                <div className="track-icon">🌍</div>
                <h4>Public Policy, Geopolitics & Strategic Governance</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Key Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">📊</div>
              <h3>Data-Driven Strategy</h3>
              <p>Advanced analytical and decision intelligence capabilities</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🤖</div>
              <h3>AI Integration</h3>
              <p>AI & digital transformation strategy for modern organizations</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🌍</div>
              <h3>Global Perspective</h3>
              <p>Multi-campus exposure and geostrategic analysis</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">💼</div>
              <h3>Real-World Application</h3>
              <p>Strategic consulting methods and capstone projects</p>
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="program-section structure-section" data-aos="fade-up">
          <h2 className="section-title">Academic Structure by Term</h2>
          
          {terms.map((termData, index) => (
            <div key={index} className="term-section">
              <div className="term-header">
                <div>
                  <h3 className="term-title">Term {termData.term} – {termData.title}</h3>
                  <p className="term-period">{termData.period} • {termData.credits} Credits</p>
                </div>
                <div className="term-credits-badge">{termData.credits} Credits</div>
              </div>
              <p className="term-description">{termData.description}</p>
              
              {termData.isInternship ? (
                <div className="internship-section">
                  <h4 className="internship-title">Options:</h4>
                  <div className="options-grid">
                    {termData.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="option-card">
                        <div className="option-icon">💼</div>
                        <p className="option-name">{option}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="courses-grid">
                  <h4 className="courses-title">Courses:</h4>
                  {termData.courses.map((course, courseIndex) => (
                    <div 
                      key={courseIndex} 
                      className="course-card"
                      data-aos="fade-up"
                      data-aos-delay={courseIndex * 50}
                    >
                      <div className="course-icon">📚</div>
                      <p className="course-name">{course}</p>
                      <span className="course-credits">3 Credits</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Learning Outcomes */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">MSc Learning Outcomes (Accreditation-Ready)</h2>
          <div className="outcomes-list">
            <div className="outcome-item">
              <span className="outcome-check">✓</span>
              <p>Design and evaluate complex organizational and market strategies</p>
            </div>
            <div className="outcome-item">
              <span className="outcome-check">✓</span>
              <p>Apply advanced analytics and data-driven reasoning to strategic decisions</p>
            </div>
            <div className="outcome-item">
              <span className="outcome-check">✓</span>
              <p>Integrate AI and digital transformation into organizational strategy</p>
            </div>
            <div className="outcome-item">
              <span className="outcome-check">✓</span>
              <p>Assess financial, economic, and geopolitical risks</p>
            </div>
            <div className="outcome-item">
              <span className="outcome-check">✓</span>
              <p>Demonstrate ethical leadership and governance competence</p>
            </div>
            <div className="outcome-item">
              <span className="outcome-check">✓</span>
              <p>Communicate strategic insights to executive and non-technical stakeholders</p>
            </div>
          </div>
        </section>

        {/* Graduate Outcomes */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Graduate Outcomes</h2>
          <p className="section-intro">
            Graduates of this program are prepared for advanced strategic and analytical roles across corporate, consulting, public-sector, and entrepreneurial environments. Typical career paths include Strategy Analyst, Management Consultant, Corporate Development Manager, Business Intelligence Lead, Innovation Manager, and Policy or Strategic Advisor.
          </p>
          <div className="career-grid">
            <div className="career-card" data-aos="fade-up" data-aos-delay="100">
              <h3>Strategy Analyst</h3>
              <p>Analyze market trends and develop strategic recommendations</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Management Consultant</h3>
              <p>Provide expert strategic advice to organizations</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="300">
              <h3>Corporate Development Manager</h3>
              <p>Lead strategic initiatives and corporate growth</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="400">
              <h3>Business Intelligence Lead</h3>
              <p>Drive data-driven decision-making in organizations</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="500">
              <h3>Innovation Manager</h3>
              <p>Lead innovation and transformation initiatives</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="600">
              <h3>Policy or Strategic Advisor</h3>
              <p>Provide strategic guidance in public and private sectors</p>
            </div>
          </div>
        </section>

        {/* Global & Professional Orientation */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Global & Professional Orientation</h2>
          <div className="orientation-box">
            <p className="orientation-text">
              The program is delivered within the GI-SMART multi-campus ecosystem, offering students international exposure, multicultural cohorts, and opportunities for professional integration aligned with their chosen anchor campus.
            </p>
            <div className="orientation-features">
              <div className="orientation-feature">
                <div className="feature-icon">🌍</div>
                <h4>International Exposure</h4>
                <p>Multi-campus experience across global locations</p>
              </div>
              <div className="orientation-feature">
                <div className="feature-icon">👥</div>
                <h4>Multicultural Cohorts</h4>
                <p>Diverse student body from around the world</p>
              </div>
              <div className="orientation-feature">
                <div className="feature-icon">💼</div>
                <h4>Professional Integration</h4>
                <p>Career pathways aligned with anchor campus</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <div className="program-actions" data-aos="fade-up">
          <Link to="/application" className="btn btn-primary">Apply Now</Link>
          <Link to="/masters-programs" className="btn btn-secondary">Back to Master's Programs</Link>
          <Link to="/programs" className="btn btn-outline">View All Programs</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default StrategicManagementMSc;

