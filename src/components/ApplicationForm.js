import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    passportNumber: '',
    passportExpiry: '',
    
    // Contact Information
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    
    // Academic Information
    program: '',
    intake: '',
    previousEducation: '',
    institution: '',
    graduationYear: '',
    gpa: '',
    
    // Documents
    cv: null,
    passport: null,
    transcripts: null,
    certificates: null,
    englishTest: null,
    
    // Additional Information
    workExperience: '',
    englishProficiency: '',
    englishTestScore: '',
    additionalInfo: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission will be handled by PHP backend
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! Our admissions team will contact you within 5 business days.');
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section id="application" className="application-form-section">
      <div className="form-hero">
        <div className="container">
          <h2>Application Form</h2>
          <p>Complete your application to join AI-SMART</p>
        </div>
      </div>
      <div className="container">
        <div className="form-wrapper">
          <div className="form-progress">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className={`progress-step ${currentStep >= step ? 'active' : ''}`}>
                <div className="progress-circle">{step}</div>
                <span className="progress-label">
                  {step === 1 && 'Personal'}
                  {step === 2 && 'Contact'}
                  {step === 3 && 'Academic'}
                  {step === 4 && 'Documents'}
                </span>
              </div>
            ))}
          </div>

          <form className="application-form" onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="form-step">
                <h3>Personal Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth *</label>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Gender *</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Nationality *</label>
                    <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Passport Number *</label>
                    <input type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Passport Expiry Date *</label>
                    <input type="date" name="passportExpiry" value={formData.passportExpiry} onChange={handleChange} required />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="form-step">
                <h3>Contact Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="form-group full-width">
                    <label>Address *</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>City *</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Country *</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Zip/Postal Code</label>
                    <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="form-step">
                <h3>Academic Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Program of Interest *</label>
                    <select name="program" value={formData.program} onChange={handleChange} required>
                      <option value="">Select Program</option>
                      <option value="mba">Master of Business Administration (MBA)</option>
                      <option value="mib">Master in International Business (MIB)</option>
                      <option value="bba">Bachelor of Business Administration (BBA)</option>
                      <option value="bib">Bachelor in International Business (BIB)</option>
                      <option value="cs">Computer Science</option>
                      <option value="engineering">Engineering</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Intake *</label>
                    <select name="intake" value={formData.intake} onChange={handleChange} required>
                      <option value="">Select Intake</option>
                      <option value="february">February</option>
                      <option value="july">July</option>
                      <option value="october">October</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Previous Education Level *</label>
                    <select name="previousEducation" value={formData.previousEducation} onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="high-school">High School</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Institution Name *</label>
                    <input type="text" name="institution" value={formData.institution} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Graduation Year *</label>
                    <input type="number" name="graduationYear" value={formData.graduationYear} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>GPA / Percentage</label>
                    <input type="text" name="gpa" value={formData.gpa} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>English Proficiency Test *</label>
                    <select name="englishProficiency" value={formData.englishProficiency} onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="ielts">IELTS</option>
                      <option value="toefl">TOEFL IBT</option>
                      <option value="cambridge">Cambridge B2</option>
                      <option value="native">Native Speaker</option>
                      <option value="exempt">Exempt (2 years English medium)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Test Score</label>
                    <input type="text" name="englishTestScore" value={formData.englishTestScore} onChange={handleChange} placeholder="e.g., IELTS 5.5" />
                  </div>
                  <div className="form-group full-width">
                    <label>Work Experience (if any)</label>
                    <textarea name="workExperience" value={formData.workExperience} onChange={handleChange} rows="3"></textarea>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="form-step">
                <h3>Required Documents</h3>
                <p className="form-note">Please upload all required documents in PDF format (Max 5MB each)</p>
                <div className="form-grid">
                  <div className="form-group file-upload">
                    <label>CV/Resume *</label>
                    <div className="file-input-wrapper">
                      <input type="file" name="cv" onChange={handleChange} accept=".pdf,.doc,.docx" required />
                      <span className="file-name">{formData.cv ? formData.cv.name : 'Choose file'}</span>
                    </div>
                  </div>
                  <div className="form-group file-upload">
                    <label>Passport (Front & Back) *</label>
                    <div className="file-input-wrapper">
                      <input type="file" name="passport" onChange={handleChange} accept=".pdf,.jpg,.jpeg,.png" required />
                      <span className="file-name">{formData.passport ? formData.passport.name : 'Choose file'}</span>
                    </div>
                  </div>
                  <div className="form-group file-upload">
                    <label>Academic Transcripts *</label>
                    <div className="file-input-wrapper">
                      <input type="file" name="transcripts" onChange={handleChange} accept=".pdf,.doc,.docx" required />
                      <span className="file-name">{formData.transcripts ? formData.transcripts.name : 'Choose file'}</span>
                    </div>
                  </div>
                  <div className="form-group file-upload">
                    <label>Academic Certificates *</label>
                    <div className="file-input-wrapper">
                      <input type="file" name="certificates" onChange={handleChange} accept=".pdf,.doc,.docx" required />
                      <span className="file-name">{formData.certificates ? formData.certificates.name : 'Choose file'}</span>
                    </div>
                  </div>
                  <div className="form-group file-upload">
                    <label>English Proficiency Test Certificate</label>
                    <div className="file-input-wrapper">
                      <input type="file" name="englishTest" onChange={handleChange} accept=".pdf,.jpg,.jpeg,.png" />
                      <span className="file-name">{formData.englishTest ? formData.englishTest.name : 'Choose file'}</span>
                    </div>
                  </div>
                  <div className="form-group full-width">
                    <label>Additional Information</label>
                    <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows="4" placeholder="Any additional information you would like to share..."></textarea>
                  </div>
                </div>
              </div>
            )}

            <div className="form-actions">
              {currentStep > 1 && (
                <button type="button" className="btn btn-secondary" onClick={prevStep}>
                  Previous
                </button>
              )}
              {currentStep < totalSteps ? (
                <button type="button" className="btn btn-primary" onClick={nextStep}>
                  Next Step
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;

