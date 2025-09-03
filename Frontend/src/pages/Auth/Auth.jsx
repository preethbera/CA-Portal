import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styles from './Auth.module.css';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={styles.authContainer}>
      <div className={styles.toggleContainer}>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleButton} ${!isSignUp ? styles.active : ''}`}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
          <button
            className={`${styles.toggleButton} ${isSignUp ? styles.active : ''}`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
      
      <div className={styles.formContainer}>
        {isSignUp ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
};

export default Auth;