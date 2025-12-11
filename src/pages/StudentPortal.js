import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './StudentPortal.css';

const StudentPortal = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    studentId: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      console.log('Login:', formData);
      alert('Login successful! (This is a demo)');
    } else {
      // Handle registration
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Register:', formData);
      alert('Registration successful! (This is a demo)');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="student-portal"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="portal-hero">
        <motion.div 
          className="container"
          variants={itemVariants}
        >
          <h1>Student Portal</h1>
          <p>Access your academic information, courses, and resources</p>
        </motion.div>
      </div>

      <div className="container">
        <div className="portal-container">
          <div className="portal-tabs">
            <motion.button
              className={`tab-button ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.login}
            </motion.button>
            <motion.button
              className={`tab-button ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.register}
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                className="portal-form-container"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <h2>{t.login}</h2>
                <form className="portal-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="login-email">{t.email} *</label>
                    <input
                      type="email"
                      id="login-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="login-password">{t.password} *</label>
                    <input
                      type="password"
                      id="login-password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder={t.password}
                    />
                  </div>
                  <div className="form-options">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>{t.rememberMe}</span>
                    </label>
                    <a href="#" className="forgot-link">{t.forgotPassword}</a>
                  </div>
                  <motion.button
                    type="submit"
                    className="btn btn-primary portal-submit"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.signIn}
                  </motion.button>
                </form>
                <p className="switch-form">
                  {t.dontHaveAccount}{' '}
                  <button onClick={() => setIsLogin(false)} className="link-button">
                    {t.signUp}
                  </button>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="register"
                className="portal-form-container"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2>{t.register}</h2>
                <form className="portal-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="reg-fullName">{t.fullName} *</label>
                    <input
                      type="text"
                      id="reg-fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder={t.fullName}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-studentId">{t.studentId} *</label>
                    <input
                      type="text"
                      id="reg-studentId"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      required
                      placeholder={t.studentId}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-email">{t.email} *</label>
                    <input
                      type="email"
                      id="reg-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-phone">{t.phoneNumber}</label>
                    <input
                      type="tel"
                      id="reg-phone"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder={t.phoneNumber}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-password">{t.password} *</label>
                    <input
                      type="password"
                      id="reg-password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder={t.password}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reg-confirmPassword">{t.confirmPassword} *</label>
                    <input
                      type="password"
                      id="reg-confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      placeholder={t.confirmPassword}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="btn btn-primary portal-submit"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.signUp}
                  </motion.button>
                </form>
                <p className="switch-form">
                  {t.alreadyHaveAccount}{' '}
                  <button onClick={() => setIsLogin(true)} className="link-button">
                    {t.signIn}
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentPortal;

