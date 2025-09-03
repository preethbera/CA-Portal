import React, { useState } from 'react';
import styles from './SignIn.module.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Data:', formData);
  };

  return (
    <div className={styles.signinContainer}>
      <div className={styles.imageSection}>
        <div className={styles.imagePlaceholder}>
          <div className={styles.placeholderContent}>
            <h3>Welcome Back!</h3>
            <p>Sign in to continue your journey with us</p>
          </div>
        </div>
      </div>
      
      <div className={styles.formSection}>
        <div className={styles.formContent}>
          <h2>Sign In</h2>
          <p>Enter your credentials to access your account</p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder=" "
              />
              <label className={styles.label}>Email Address</label>
            </div>
            
            <div className={styles.inputGroup}>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder=" "
              />
              <label className={styles.label}>Password</label>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;