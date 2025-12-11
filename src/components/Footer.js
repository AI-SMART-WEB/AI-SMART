import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AI-SMART</h3>
            <p>Excellence in Education Since 1990. Shaping tomorrow's leaders through world-class education and innovation.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="/admissions">Admissions</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Programs</h4>
            <ul>
              <li><a href="/programs">Business Administration</a></li>
              <li><a href="/programs">Computer Science</a></li>
              <li><a href="/programs">Engineering</a></li>
              <li><a href="/programs">Arts & Humanities</a></li>
              <li><a href="/programs">Medical Sciences</a></li>
              <li><a href="/programs">Law & Legal Studies</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>📍 123 Education Boulevard, Paris, France 75001</li>
              <li>📞 +33 1 23 45 67 89</li>
              <li>📧 info@ai-smart.edu</li>
              <li>🕒 Mon-Fri: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AI-SMART. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

