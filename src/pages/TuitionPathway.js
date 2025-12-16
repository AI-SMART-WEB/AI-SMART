import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TuitionPathway.css';

const TuitionPathway = () => {
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
      className="tuition-pathway-page"
    >
      <div className="pathway-container">
        {/* Main Title */}
        <div className="pathway-main-title" data-aos="fade-down">
          <h1>GI‑SMART Program Investment Overview</h1>
          <p className="intro-text">
            The Global Institute for Strategic Management and Advanced Research Technologies (GI‑SMART) offers a progressive academic pathway that empowers learners to develop the skills, mindset, and global perspective required to thrive in the era of Artificial Intelligence, Data Analytics, and Intelligent Systems Design. Each program tier is structured for maximum flexibility, career alignment, and international opportunity.
          </p>
        </div>

        {/* Undergraduate Pathway - BAID */}
        <section className="pathway-section" data-aos="fade-up">
          <div className="section-header baid-header">
            <h2>1️⃣ Undergraduate Pathway — Bachelor of Artificial Intelligence Design (BAID)</h2>
            <h3>A Modular Learning Journey — Tailored to Your Ambition</h3>
          </div>
          
          <p className="section-description">
            Every learner's journey is unique. GI‑SMART offers a progressive pathway structure that allows students to begin at the level that best matches their goals and resources.
          </p>

          <div className="pathway-table-wrapper" data-aos="fade-up" data-aos-delay="100">
            <table className="pathway-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Duration</th>
                  <th>Award</th>
                  <th>Tuition (€)</th>
                  <th>Key Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tier-name">Certificate</td>
                  <td>1 Year</td>
                  <td>Certificate in Artificial Intelligence Design Foundations</td>
                  <td className="tuition-amount">€15,000</td>
                  <td>Ideal for entry-level learners seeking a foundation in AI Design and creative technologies. Credits fully transferable toward the Diploma or Degree.</td>
                </tr>
                <tr>
                  <td className="tier-name">Diploma</td>
                  <td>2 Years</td>
                  <td>Diploma in Applied Artificial Intelligence Design</td>
                  <td className="tuition-amount">€25,000</td>
                  <td>A comprehensive 2-year qualification focusing on practical applications of AI in design and innovation.</td>
                </tr>
                <tr>
                  <td className="tier-name">Degree</td>
                  <td>4 Years</td>
                  <td>Bachelor of Artificial Intelligence Design</td>
                  <td className="tuition-amount">€40,000</td>
                  <td>A globally recognized four-year degree integrating technology, design, and strategy for the AI-driven world. Includes cross-campus mobility options (Paris, Dubai, Germany, Bucharest).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pathway-tagline" data-aos="fade-up" data-aos-delay="200">
            <p>💡 Students may begin with the Certificate or Diploma and later "stack" their learning toward the full BAID degree — maintaining credit continuity and academic momentum.</p>
          </div>
        </section>

        {/* Divider */}
        <div className="pathway-divider"></div>

        {/* Graduate Pathway - MSc */}
        <section className="pathway-section" data-aos="fade-up">
          <div className="section-header msc-header">
            <h2>2️⃣ Graduate Pathway — Master of Science in Data Analytics & Intelligent Systems Design</h2>
          </div>

          <div className="pathway-table-wrapper" data-aos="fade-up" data-aos-delay="100">
            <table className="pathway-table">
              <thead>
                <tr>
                  <th>Track</th>
                  <th>Duration</th>
                  <th>Tuition (€)</th>
                  <th>Eligibility & Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tier-name">Standard Track</td>
                  <td>18 Months</td>
                  <td className="tuition-amount">€30,000</td>
                  <td>Open to graduates from any recognized undergraduate program. Comprehensive MSc covering Data Analytics, Machine Learning, and AI-driven strategic design.</td>
                </tr>
                <tr>
                  <td className="tier-name">Accelerated Track</td>
                  <td>12–14 Months</td>
                  <td className="tuition-amount">€20,000</td>
                  <td>Exclusive to BAID graduates. Recognizes prior coursework and professional competencies developed during BAID for faster completion and reduced tuition.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout-box" data-aos="fade-up" data-aos-delay="200">
            <div className="callout-icon">🎓</div>
            <div className="callout-content">
              <strong>Dual-Enrollment Advantage:</strong>
              <p>Enroll simultaneously in both the BAID and MSc programs and benefit from a combined tuition of €55,000 (instead of €60,000).</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="pathway-divider"></div>

        {/* Comprehensive Study Packages */}
        <section className="pathway-section" data-aos="fade-up">
          <div className="section-header packages-header">
            <h2>3️⃣ Comprehensive Study Packages (Tuition + Accommodation)</h2>
          </div>

          <div className="pathway-table-wrapper" data-aos="fade-up" data-aos-delay="100">
            <table className="pathway-table">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Duration</th>
                  <th>Includes</th>
                  <th>Total (€)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tier-name">BAID + MSc Integrated Experience</td>
                  <td>5.5 Years</td>
                  <td>Tuition, premium student accommodation, campus access, and academic support</td>
                  <td className="tuition-amount">€120,000</td>
                </tr>
                <tr>
                  <td className="tier-name">Full BAID Residential Package</td>
                  <td>4 Years</td>
                  <td>Tuition + accommodation for all four years</td>
                  <td className="tuition-amount">€90,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="package-note" data-aos="fade-up" data-aos-delay="200">
            <p>💬 Tuition fees do not include travel or personal expenses. All accommodation options are safe, modern, and located near each GI‑SMART campus.</p>
          </div>
        </section>

        {/* Divider */}
        <div className="pathway-divider"></div>

        {/* Highlights Section */}
        <section className="pathway-section highlights-section" data-aos="fade-up">
          <div className="section-header highlights-header">
            <h2>Highlights for Students</h2>
          </div>

          <ul className="highlights-list" data-aos="fade-up" data-aos-delay="100">
            <li>
              <strong>Global Mobility & Multi-Campus Experience</strong> — anchor in one city, explore the others.
            </li>
            <li>
              <strong>Financial Flexibility & Tiered Pathways</strong> — start with a Certificate and advance seamlessly.
            </li>
            <li>
              <strong>Career ROI</strong> — each tier aligned with high-demand roles in AI, ML, Data Science, and Creative Technology.
            </li>
            <li>
              <strong>Subtle Immigration Pathways</strong> — graduates may explore post-study career opportunities in their anchor campus region.
            </li>
            <li>
              <strong>Personalized Learning</strong> — small cohorts (40–50 early years, 30–35 advanced years) ensure interactive mentorship.
            </li>
          </ul>
        </section>

        {/* Footer */}
        <div className="pathway-footer" data-aos="fade-up">
          <p>Global Institute for Strategic Management and Advanced Research Technologies (GI‑SMART)</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TuitionPathway;
