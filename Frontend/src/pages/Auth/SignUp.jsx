import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from './SignUp.module.css';
import { TailSpin } from "react-loading-icons";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Api from "../../API/Api";

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
  const [fieldType, setFieldType] = useState("password");
  const [error, setError] = useState(false);
  const [isError, setIsError] = useState(true);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const formElement = useRef(null);

  const toggleVisibility = () => {
    setFieldType(fieldType === "text" ? "password" : "text");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Map the form data to match the backend expected format
    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      gender: formData.gender.toUpperCase(),
      phone: formData.mobileNumber,
      email: formData.email,
      password: formData.password,
      college: formData.collegeName,
      city: formData.city,
      state: formData.state,
      sent: new Date().toISOString(),
    };

    console.log(data);

    setLoading(true);

    Api.post(`/signup`, data)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        setLoading(false);
        setOpen(true);
        setIsError(false);
        setError("Signup Successful");

        navigate("/SignIn", { state: { replace: "true" } });

        console.log("Success");

        return response.json();
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response?.data?.message || "Signup failed");
        setIsError(true);
        setOpen(true);
        console.log(err);
      });
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error}
      >
        <Alert
          onClose={handleClose}
          severity={isError ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {typeof error === 'object' ? error.message || JSON.stringify(error) : error}
        </Alert>
      </Snackbar>

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
                  <option value="" hidden>Select Gender</option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  <option value="OTHER">OTHER</option>
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
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type={fieldType}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Password"
                />
                <label className={styles.label}>Password</label>
                <span
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#EFED34",
                  }}
                  onClick={toggleVisibility}
                  className="material-symbols-outlined"
                >
                  {fieldType === "password" ? "visibility" : "visibility_off"}
                </span>
              </div>
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
              {loading ? (
                <span style={{ marginRight: "9px", marginTop: "5px" }}>
                  <TailSpin width="20" height="12" />
                </span>
              ) : (
                ""
              )}
              Create Account
            </button>
          </form>

          {/* <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p>
              ALREADY A MEMBER?{" "}
              <Link to="/SignIn" style={{ color: "#007bff", textDecoration: "underline" }}>
                SIGN IN
              </Link>
            </p>
          </div> */}
        </div>
      </div>
      
      <div className={styles.imageSection}>
        <div className={styles.imagePlaceholder}>
          <img src="/SignUp.png" alt="Sign Up" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;