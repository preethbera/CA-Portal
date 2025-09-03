import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styles from './Auth.module.css';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleToggle = (newState) => {
    if (newState !== isSignUp) {
      setIsFlipping(true);
      
      // Wait for half the flip animation before changing content
      setTimeout(() => {
        setIsSignUp(newState);
      }, 300);
      
      // Complete the animation
      setTimeout(() => {
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.toggleContainer}>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleButton} ${!isSignUp ? styles.active : ''}`}
            onClick={() => handleToggle(false)}
          >
            Sign In
          </button>
          <button
            className={`${styles.toggleButton} ${isSignUp ? styles.active : ''}`}
            onClick={() => handleToggle(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
      
      <div className={styles.formContainer}>
        <div className={`${styles.formWrapper} ${isFlipping ? styles.flipping : ''} ${isSignUp ? styles.showSignUp : styles.showSignIn}`}>
          <div className={`${styles.formContent} ${styles.signin}`}>
            <SignIn />
          </div>
          <div className={`${styles.formContent} ${styles.signup}`}>
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;