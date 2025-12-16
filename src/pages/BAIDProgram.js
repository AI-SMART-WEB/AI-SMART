import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './BAIDProgram.css';

const BAIDProgram = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
    window.scrollTo(0, 0);
  }, []);

  const programData = {
    title: 'Bachelor of Artificial Intelligence Design (BAID)',
    duration: '4 Years (12 Academic Terms – Trimester System)',
    model: 'Hybrid (Online + In-Lab + Studio)',
    credits: '120–128',
    publisher: 'Pearson Higher Education',
    vision: 'To educate the next generation of designers, engineers, and thinkers who can design, build, and ethically guide artificial intelligence that is beautiful, human-centered, and socially responsible.',
    years: [
      {
        year: 1,
        title: 'Foundations of Intelligence & Design',
        terms: [
          {
            term: 'Term 1 (Fall)',
            courses: [
              { code: 'AID 101', name: 'Introduction to Artificial Intelligence & Design', credits: 3 },
              { code: 'AID 102', name: 'Programming Foundations for AI (Python & JavaScript)', credits: 4 },
              { code: 'AID 103', name: 'Design Thinking & Creative Problem Solving', credits: 3 },
              { code: 'AID 104', name: 'Academic Writing & Digital Communication', credits: 2 }
            ]
          },
          {
            term: 'Term 2 (Winter)',
            courses: [
              { code: 'AID 105', name: 'Principles of Effective AI Prompting I', credits: 3 },
              { code: 'AID 106', name: 'Mathematics for Intelligence Systems', credits: 4 },
              { code: 'AID 107', name: 'Digital Visualization & Design Software', credits: 3 },
              { code: 'AID 108', name: 'Cognitive Psychology & Human Behavior', credits: 3 }
            ]
          },
          {
            term: 'Term 3 (Summer)',
            courses: [
              { code: 'AID 109', name: 'Data Structures & Algorithmic Thinking', credits: 3 },
              { code: 'AID 110', name: 'Ethics & Philosophy of Artificial Intelligence', credits: 3 },
              { code: 'AID 111', name: 'Design Studio I: AI-Assisted Creative Systems', credits: 4 },
              { code: 'AID 112', name: 'Portfolio Foundations', credits: 2 }
            ]
          }
        ]
      },
      {
        year: 2,
        title: 'Designing Intelligence',
        terms: [
          {
            term: 'Term 4 (Fall)',
            courses: [
              { code: 'AID 201', name: 'Machine Learning I: Supervised Learning', credits: 4 },
              { code: 'AID 202', name: 'Human–Computer Interaction & Experience Design', credits: 3 },
              { code: 'AID 203', name: 'Visual Communication & Information Design', credits: 3 },
              { code: 'AID 204', name: 'Principles of Effective AI Prompting II', credits: 3 }
            ]
          },
          {
            term: 'Term 5 (Winter)',
            courses: [
              { code: 'AID 205', name: 'Machine Learning II: Deep & Reinforcement Learning', credits: 4 },
              { code: 'AID 206', name: 'UX/UI Design for AI Products', credits: 3 },
              { code: 'AID 207', name: 'Applied Statistics & Probability for AI', credits: 3 },
              { code: 'AID 208', name: 'Design Studio II: Prototyping Interactive Systems', credits: 4 }
            ]
          },
          {
            term: 'Term 6 (Summer)',
            courses: [
              { code: 'AID 209', name: 'Natural Language Processing & Prompt Optimization', credits: 4 },
              { code: 'AID 210', name: 'Computational Creativity & Generative Art', credits: 3 },
              { code: 'AID 211', name: 'Internship I – Industry Exposure', credits: 2 },
              { code: 'AID 212', name: 'AI for Creative Industries Seminar', credits: 2 }
            ]
          }
        ]
      },
      {
        year: 3,
        title: 'Applied Systems & Real-World Integration',
        terms: [
          {
            term: 'Term 7 (Fall)',
            courses: [
              { code: 'AID 301', name: 'AI Systems Architecture & Cloud Integration', credits: 4 },
              { code: 'AID 302', name: 'AI & Robotics: Design for Movement', credits: 3 },
              { code: 'AID 303', name: 'Data Ethics Lab', credits: 3 },
              { code: 'AID 304', name: 'Design Studio III: Product AI Development', credits: 4 }
            ]
          },
          {
            term: 'Term 8 (Winter)',
            courses: [
              { code: 'AID 305', name: 'Emotion-Aware & Adaptive AI Interfaces', credits: 3 },
              { code: 'AID 306', name: 'Human–AI Collaboration Studio', credits: 4 },
              { code: 'AID 307', name: 'Research Methods in AI Design', credits: 3 },
              { code: 'AID 308', name: 'Principles of Effective AI Prompting III', credits: 3 }
            ]
          },
          {
            term: 'Term 9 (Summer)',
            courses: [
              { code: 'AID 309', name: 'AI Project Management & Entrepreneurship', credits: 3 },
              { code: 'AID 310', name: 'Elective I', credits: 3 },
              { code: 'AID 311', name: 'Internship II – Applied Research', credits: 3 },
              { code: 'AID 312', name: 'Capstone Preparation & Proposal', credits: 2 }
            ]
          }
        ]
      },
      {
        year: 4,
        title: 'Integration, Strategy & Impact',
        terms: [
          {
            term: 'Term 10 (Fall)',
            courses: [
              { code: 'AID 401', name: 'Capstone Project I – Design & Development', credits: 4 },
              { code: 'AID 402', name: 'Elective II', credits: 3 },
              { code: 'AID 403', name: 'AI Strategy & Policy', credits: 3 },
              { code: 'AID 404', name: 'Professional Ethics in Technology', credits: 2 }
            ]
          },
          {
            term: 'Term 11 (Winter)',
            courses: [
              { code: 'AID 405', name: 'Capstone Project II – Implementation & Exhibition', credits: 4 },
              { code: 'AID 406', name: 'Elective III', credits: 3 },
              { code: 'AID 407', name: 'AI and Society: Global Implications', credits: 3 },
              { code: 'AID 408', name: 'Advanced Portfolio & Career Strategy', credits: 2 }
            ]
          },
          {
            term: 'Term 12 (Summer)',
            courses: [
              { code: 'AID 409', name: 'Internship III – Global or Remote Placement', credits: 4 },
              { code: 'AID 410', name: 'Entrepreneurship Lab / Startup Incubator', credits: 3 },
              { code: 'AID 411', name: 'Seminar: The Future of Intelligence Design', credits: 2 }
            ]
          }
        ]
      }
    ],
    specializations: [
      {
        id: 1,
        title: 'Creative AI & Generative Design',
        courses: [
          'Generative Visual Art & Computational Aesthetics',
          'Creative Coding with AI',
          'Generative Sound, Music, and Audio Design',
          'AI and the Future of Storytelling'
        ]
      },
      {
        id: 2,
        title: 'AI for Smart Environments & Sustainability',
        courses: [
          'AI for Sustainable Design & Architecture',
          'IoT for Smart Cities',
          'Predictive Environmental Modeling',
          'Circular Economy and Design Automation'
        ]
      },
      {
        id: 3,
        title: 'AI for Health, Wellness, and Accessibility',
        courses: [
          'AI in Healthcare Design',
          'NeuroDesign: Brain, Behavior, and Interface',
          'Accessibility by Design',
          'Wearable Tech & Human Sensing Systems'
        ]
      },
      {
        id: 4,
        title: 'Game Design, Simulation & Virtual Worlds',
        courses: [
          'Game AI & Procedural Content Generation',
          'Virtual & Augmented Reality Systems',
          'AI in Entertainment and Metaverse Design',
          'Simulation Systems & Autonomous Agents'
        ]
      },
      {
        id: 5,
        title: 'Ethical AI, Policy & Human-Centric Systems',
        courses: [
          'AI Governance & Global Regulation',
          'Human Rights in the Age of AI',
          'Philosophy of Consciousness and Machine Mind',
          'Ethical Product Design'
        ]
      },
      {
        id: 6,
        title: 'AI Entrepreneurship & Innovation',
        courses: [
          'AI Startup Launch Lab',
          'AI Product Management & Growth Strategy',
          'Financing Innovation & Venture Design',
          'Legal and Ethical Issues in AI Business'
        ]
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="baid-program-page"
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
                <span className="meta-label">Model</span>
                <span className="meta-value">{programData.model}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Credits</span>
                <span className="meta-value">{programData.credits}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Publisher</span>
                <span className="meta-value">{programData.publisher}</span>
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

        {/* Program Structure */}
        <section className="program-section" data-aos="fade-up">
          <h2>Program Structure (Trimester Model)</h2>
          <p className="section-intro">
            The program is structured across 12 academic terms (Fall, Winter, Summer) over four years. 
            Each term contains 3–4 courses, combining theoretical learning, applied labs, and design studios.
          </p>

          {programData.years.map((year, yearIndex) => (
            <div key={yearIndex} className="year-section" data-aos="fade-up">
              <div className="year-header">
                <h3>Year {year.year} – {year.title}</h3>
              </div>
              {year.terms.map((term, termIndex) => (
                <div key={termIndex} className="term-section">
                  <h4 className="term-title">{term.term}</h4>
                  <div className="courses-grid">
                    {term.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="course-card">
                        <div className="course-code">{course.code}</div>
                        <div className="course-name">{course.name}</div>
                        <div className="course-credits">{course.credits} Credits</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* Specialization Tracks */}
        <section className="program-section" data-aos="fade-up">
          <h2>Specialization Tracks (Elective Pathways)</h2>
          <p className="section-intro">
            Students choose one specialization at the end of Year 2, completing 4 electives (12 credits) 
            aligned with their chosen track.
          </p>
          <div className="specializations-grid">
            {programData.specializations.map((track, index) => (
              <div key={track.id} className="specialization-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3>Track {track.id}: {track.title}</h3>
                <ul className="track-courses">
                  {track.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="program-cta" data-aos="fade-up">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join the next generation of AI designers and innovators</p>
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

export default BAIDProgram;

