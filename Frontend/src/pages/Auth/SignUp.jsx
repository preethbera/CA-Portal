import React, { useState } from 'react';
import styles from './SignUp.module.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    mobileNumber: '',
    email: '',
    password: '',
    collegeName: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', formData);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.formSection}>
        <div className={styles.formContent}>
          <h2>Create Account</h2>
          <p>Join us today and start your journey</p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder=" "
                />
                <label className={styles.label}>First Name</label>
              </div>
              
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder=" "
                />
                <label className={styles.label}>Last Name</label>
              </div>
            </div>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                <label className={styles.selectLabel}>Gender</label>
              </div>
              
              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder=" "
                />
                <label className={styles.label}>Mobile Number</label>
              </div>
            </div>
            
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
            
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder=" "
              />
              <label className={styles.label}>College Name</label>
            </div>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder=" "
                />
                <label className={styles.label}>City</label>
              </div>
              
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder=" "
                />
                <label className={styles.label}>State</label>
              </div>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Create Account
            </button>
          </form>
        </div>
      </div>
      
      <div className={styles.imageSection}>
        <div className={styles.imagePlaceholder}>
          <div className={styles.placeholderContent}>
            <h3>Join Our Community!</h3>
            <p>Create your account and unlock amazing opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;