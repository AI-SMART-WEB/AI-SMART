import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AISMARTMSc.css';

const AISMARTMSc = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="aismart-msc-page"
    >
      {/* Hero Section */}
      <div className="program-hero" data-aos="fade-down">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Master of Science (MSc) in Applied Artificial Intelligence & Data Systems</h1>
            <p className="hero-subtitle">Next-Generation Graduate Program Bridging AI, Data Engineering, Robotics, and Innovation</p>
            <div className="hero-badges">
              <span className="badge">2 Years</span>
              <span className="badge">120 ECTS</span>
              <span className="badge">Hybrid Delivery</span>
              <span className="badge">Dubai & Paris</span>
            </div>
          </div>
        </div>
      </div>

      <div className="program-container">
        {/* Program Concept */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Master of Science Program Concept</h2>
          <div className="strategic-concept-box">
            <h3 className="concept-title">Program Vision</h3>
            <p className="concept-text">
              The MSc is designed as a future-proof graduate program integrating Artificial Intelligence, Data Analytics, Intelligent Systems, and Strategic Decision-Making. The program is positioned as a natural continuation of GI-SMART undergraduate degrees while remaining open to graduates from other disciplines.
            </p>
          </div>
          <div className="overview-grid">
            <div className="overview-card">
              <h3>Duration</h3>
              <p>18 Months Standard</p>
              <p className="duration-note">12–14 Months Accelerated for BAID Graduates</p>
            </div>
            <div className="overview-card">
              <h3>Total Credits</h3>
              <p>120 ECTS (≈36 UAE Credits / 60 NA Credits)</p>
            </div>
            <div className="overview-card">
              <h3>Delivery</h3>
              <p>Hybrid (Dubai-based with Paris mobility option)</p>
            </div>
            <div className="overview-card">
              <h3>Accreditation</h3>
              <p>RNCP Level 7 (France) / UAE NQF Level 9 (CAA/KHDA)</p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="program-section vision-mission" data-aos="fade-up">
          <div className="vision-box">
            <h2 className="section-title">Program Vision & Mission</h2>
            <div className="vm-grid">
              <div className="vm-card vision">
                <h3>Vision</h3>
                <p>To produce globally competent innovators and leaders in AI, data systems, and robotics who shape a sustainable and human-centered digital future.</p>
              </div>
              <div className="vm-card mission">
                <h3>Mission</h3>
                <p>To provide interdisciplinary education integrating AI, data science, and design to address industrial, social, and environmental challenges worldwide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Key Program Features</h2>
          <ul className="features-list">
            <li>Dubai-first global program with European equivalence</li>
            <li>3-term structure allowing 3 intakes per year</li>
            <li>Fully modular and interdisciplinary</li>
            <li>Embedded AI assistant (GiGi) for multilingual learning</li>
            <li>Integration of applied research, robotics, and sustainability</li>
          </ul>
        </section>

        {/* Program Structure */}
        <section className="program-section structure-section" data-aos="fade-up">
          <h2 className="section-title">Program Structure</h2>
          <p className="section-intro">The MSc AAIDS is structured into six terms over two academic years:</p>

          <div className="year-section">
            <h3 className="year-title">Year 1 – Foundations & Applied Systems (60 ECTS)</h3>
            <div className="terms-grid">
              <div className="term-card" data-aos="fade-up" data-aos-delay="100">
                <div className="term-number">Term 1</div>
                <div className="term-name">Fall</div>
                <ul className="term-courses">
                  <li>Foundations of AI</li>
                  <li>Python for AI</li>
                  <li>Mathematics for ML</li>
                  <li>AI Ethics & Governance</li>
                </ul>
              </div>
              <div className="term-card" data-aos="fade-up" data-aos-delay="200">
                <div className="term-number">Term 2</div>
                <div className="term-name">Winter</div>
                <ul className="term-courses">
                  <li>Data Systems & Cloud Infrastructure</li>
                  <li>Robotics & Mechatronics</li>
                  <li>Automation & Industrial AI</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
              <div className="term-card" data-aos="fade-up" data-aos-delay="300">
                <div className="term-number">Term 3</div>
                <div className="term-name">Spring/Summer</div>
                <ul className="term-courses">
                  <li>Machine Vision</li>
                  <li>IoT & Edge AI</li>
                  <li>Systems Integration</li>
                  <li>Professional Seminar</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="year-section">
            <h3 className="year-title">Year 2 – Specialization, Research & Capstone (60 ECTS)</h3>
            <div className="terms-grid">
              <div className="term-card" data-aos="fade-up" data-aos-delay="100">
                <div className="term-number">Term 4</div>
                <div className="term-name">Fall</div>
                <ul className="term-courses">
                  <li>Research Methods</li>
                  <li>Specialization I</li>
                  <li>Innovation & IP Strategy</li>
                  <li>Elective</li>
                </ul>
              </div>
              <div className="term-card" data-aos="fade-up" data-aos-delay="200">
                <div className="term-number">Term 5</div>
                <div className="term-name">Winter</div>
                <ul className="term-courses">
                  <li>Specialization II</li>
                  <li>Applied Project</li>
                  <li>Leadership and Professional Development</li>
                </ul>
              </div>
              <div className="term-card" data-aos="fade-up" data-aos-delay="300">
                <div className="term-number">Term 6</div>
                <div className="term-name">Spring/Summer</div>
                <ul className="term-courses">
                  <li>Capstone Project</li>
                  <li>Internship</li>
                  <li>Thesis and Portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Streams */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Specialization Streams</h2>
          <div className="specialization-grid">
            <div className="specialization-card" data-aos="fade-up" data-aos-delay="100">
              <div className="spec-number">1</div>
              <h3>Intelligent Robotics & Autonomous Systems</h3>
            </div>
            <div className="specialization-card" data-aos="fade-up" data-aos-delay="200">
              <div className="spec-number">2</div>
              <h3>Data Analytics, Cloud & Cyber-Intelligence</h3>
            </div>
            <div className="specialization-card" data-aos="fade-up" data-aos-delay="300">
              <div className="spec-number">3</div>
              <h3>Human-Centered AI & Immersive Systems</h3>
            </div>
            <div className="specialization-card" data-aos="fade-up" data-aos-delay="400">
              <div className="spec-number">4</div>
              <h3>AI for Sustainability & Smart Cities</h3>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">MSc Learning Outcomes (Accreditation-Ready)</h2>
          <div className="outcomes-list">
            <div className="outcome-item">
              <span className="outcome-check">✓</span>
              <p>Design, evaluate, and optimize advanced AI and data-driven systems</p>
            </div>
            <div className="outcome-item">
              <span className="outcome-check">✓</span>
              <p>Apply machine learning, analytics, and forecasting techniques to complex environments</p>
            </div>
            <div className="outcome-item">
              <span className="outcome-check">✓</span>
              <p>Demonstrate ethical judgment and responsible AI leadership</p>
            </div>
            <div className="outcome-item">
              <span className="outcome-check">✓</span>
              <p>Communicate advanced technical insights to technical and non-technical stakeholders</p>
            </div>
            <div className="outcome-item">
              <span className="outcome-check">✓</span>
              <p>Integrate interdisciplinary knowledge into strategic and operational decisions</p>
            </div>
          </div>
        </section>

        {/* Faculty & Infrastructure */}
        <section className="program-section infrastructure-section" data-aos="fade-up">
          <h2 className="section-title">Faculty & Infrastructure Highlights (Dubai Campus)</h2>
          <div className="infrastructure-grid">
            <div className="infra-card">
              <h3>AI & ML Laboratory</h3>
              <p>GPU servers, deep learning frameworks</p>
            </div>
            <div className="infra-card">
              <h3>Robotics & Mechatronics Lab</h3>
              <p>Robotic arms, drones, ROS</p>
            </div>
            <div className="infra-card">
              <h3>Data Systems Lab</h3>
              <p>Cloud clusters, data governance tools</p>
            </div>
            <div className="infra-card">
              <h3>XR Innovation Studio</h3>
              <p>AR/VR systems and affective AI</p>
            </div>
            <div className="infra-card">
              <h3>Smart City Sandbox</h3>
              <p>IoT and urban simulation datasets</p>
            </div>
            <div className="infra-card">
              <h3>Faculty</h3>
              <p>80% PhD-level, 20% industry adjuncts</p>
            </div>
          </div>
        </section>

        {/* Industry Partnerships */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Industry & Academic Partnerships</h2>
          <div className="partnerships-list">
            <div className="partnership-item">
              <strong>Dubai Future Labs</strong> – Robotics collaboration and student internships.
            </div>
            <div className="partnership-item">
              <strong>G42 Cloud, Etisalat Digital</strong> – Cloud infrastructure and AI implementation.
            </div>
            <div className="partnership-item">
              <strong>Smart Dubai Office, DEWA, RTA</strong> – Smart City data and sustainability projects.
            </div>
            <div className="partnership-item">
              <strong>Paris Campus</strong> – Research and student mobility programs.
            </div>
          </div>
        </section>

        {/* Market Positioning */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">MSc Portfolio & Market Positioning</h2>
          <div className="positioning-box">
            <p className="positioning-text">
              The GI-SMART MSc program is positioned as a flagship graduate qualification preparing learners for leadership roles in artificial intelligence, data science, intelligent systems, and innovation-driven organizations.
            </p>
            <p className="positioning-text">
              Graduates are prepared for high-impact roles including AI Architect, Senior Data Scientist, Decision Intelligence Consultant, Robotics Systems Engineer, Innovation Lead, and Technology Strategist.
            </p>
            <p className="positioning-text">
              The program supports global employability and, where applicable, structured pathways toward long-term professional settlement in the student's anchor campus country.
            </p>
          </div>
        </section>

        {/* Career Pathways */}
        <section className="program-section" data-aos="fade-up">
          <h2 className="section-title">Career Pathways</h2>
          <div className="career-grid">
            <div className="career-card" data-aos="fade-up" data-aos-delay="100">
              <h3>AI Architect</h3>
              <p>Design and implement enterprise AI systems</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Senior Data Scientist</h3>
              <p>Lead data science initiatives and analytics teams</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="300">
              <h3>Decision Intelligence Consultant</h3>
              <p>Provide strategic consulting on AI-driven decision systems</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="400">
              <h3>Robotics Systems Engineer</h3>
              <p>Develop and deploy intelligent robotic systems</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="500">
              <h3>Innovation Lead</h3>
              <p>Drive innovation in technology-driven organizations</p>
            </div>
            <div className="career-card" data-aos="fade-up" data-aos-delay="600">
              <h3>Technology Strategist</h3>
              <p>Shape technology strategy for global organizations</p>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="program-section timeline-section" data-aos="fade-up">
          <h2 className="section-title">Implementation Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Q1 2025</div>
              <div className="timeline-content">Infrastructure Design</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Q2 2025</div>
              <div className="timeline-content">Accreditation Preparation</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Q3 2025</div>
              <div className="timeline-content">Faculty Recruitment & Lab Setup</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Q4 2025</div>
              <div className="timeline-content">Marketing & Admissions</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Q1 2026</div>
              <div className="timeline-content">Program Launch (Dubai Campus)</div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="program-section conclusion-section" data-aos="fade-up">
          <div className="conclusion-box">
            <p className="conclusion-text">
              The MSc in Applied Artificial Intelligence & Data Systems represents a global benchmark in advanced, interdisciplinary education—merging AI, data, robotics, and design to empower the innovators of the 2030–2050 horizon.
            </p>
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

export default AISMARTMSc;

