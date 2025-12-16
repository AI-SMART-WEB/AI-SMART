import React from 'react';
import './Admissions.css';

const Admissions = () => {
  const steps = [
    {
      number: '01',
      title: 'Application',
      description: 'Complete the online application form and submit required documents',
      details: [
        'Online application form completed',
        'Updated CV/Resume',
        'Valid Passport (front and back photo)',
        'Academic certificates and transcripts from GCSE/SSC to most recent degree',
        'English proficiency test (IELTS 5.5, TOEFL IBT 85, Cambridge B2 or equivalent)',
        'Video interview in English'
      ],
      icon: '📝',
      color: '#002F5F'
    },
    {
      number: '02',
      title: 'Admission Review',
      description: 'Comprehensive evaluation of your application and eligibility',
      details: [
        'Document review by admissions team',
        'Online or in-person interview',
        'Eligibility assessment',
        'Conditional offer letter issued',
        'Decision communicated within 5 business days'
      ],
      icon: '✅',
      color: '#29ABE2'
    },
    {
      number: '03',
      title: 'Enrollment',
      description: 'Finalize your enrollment and receive admission documents',
      details: [
        'Meet conditions in conditional offer',
        'Pay tuition deposit',
        'Receive unconditional admission letter',
        'Get visa support documents (for international students)',
        'Complete enrollment process'
      ],
      icon: '🎓',
      color: '#002F5F'
    }
  ];

  return (
    <section id="admissions" className="admissions">
      <div className="admissions-hero">
        <div className="container">
          <div className="admissions-hero-content">
            <h2>Admission Process</h2>
            <p>Simple 3-step admission process to start your journey with GI-SMART</p>
            <a href="#application" className="btn btn-primary">Start Application</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="admissions-steps">
          {steps.map((step, index) => (
            <div key={index} className="admission-step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-details">
                <h4>Requirements:</h4>
                <ul>
                  {step.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="step-arrow">
                {index < steps.length - 1 && <span>↓</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="admissions-cta">
          <div className="cta-content">
            <h3>Ready to Begin Your Journey?</h3>
            <p>Join thousands of successful students who started their career at GI-SMART</p>
            <div className="cta-buttons">
              <a href="#application" className="btn btn-primary">Apply Now</a>
              <a href="#contact" className="btn btn-secondary">Contact Admissions</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;

