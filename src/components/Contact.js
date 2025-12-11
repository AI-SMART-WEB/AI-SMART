import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission will be handled by PHP backend later
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-banner">
        <div className="container">
          <div className="contact-banner-content">
            <h2>{t.getInTouch}</h2>
            <p>{t.contactDesc}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t.contactInformation}</h3>
            <p>{t.contactDesc2}</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>{t.addressLabel}</h4>
                  <p>{t.address}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>{t.phoneLabel}</h4>
                  <p>{t.phone}<br />+33 1 23 45 67 90</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>{t.emailLabel}</h4>
                  <p>{t.email}<br />admissions@ai-smart.edu</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h4>{t.officeHoursLabel}</h4>
                  <p>{t.officeHours}</p>
                </div>
              </div>
            </div>
            <div className="contact-map">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Campus Location"
              />
            </div>
          </div>
          <div className="contact-form-wrapper">
            <h3>{t.sendMessage}</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.fullName} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.fullName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.emailAddress} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.emailAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{t.phoneNumber}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phoneNumber}
                />
              </div>
              <div className="form-group">
                <label htmlFor="program">{t.programOfInterest}</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                >
                  <option value="">{t.selectProgram}</option>
                  <option value="business">{t.businessAdmin}</option>
                  <option value="cs">{t.computerScience}</option>
                  <option value="engineering">{t.engineering}</option>
                  <option value="arts">{t.artsHumanities}</option>
                  <option value="medical">{t.medicalSciences}</option>
                  <option value="law">{t.lawLegal}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.message} *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder={t.tellUsHow}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">{t.sendMessageBtn}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

