import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from './SignIn.module.css';
import { TailSpin } from "react-loading-icons";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Api from "../../API/Api";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [fieldType, setFieldType] = useState("password");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const [forget, setForget] = useState(false);
  const [femail, setFemail] = useState("");
  const [text, setText] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const { replace } = location.state || { replace: false };

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
    const user = { email: formData.email, password: formData.password };

    setLoading(true);

    Api.post(`/signin/`, user)
      .then((response) => {
        setError(false);
        setLoading(false);

        setError("Login Successful");
        setOpen(true);

        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log("DATA STORED IN LOCAL STORAGE");
        navigate("/");
      })
      .catch((err) => {
        console.log(err?.response?.data);
        setLoading(false);
        setError(err?.response?.data?.message || err?.response?.data || "Login failed");
        setOpen(true);
      });
  };

  const handleForgetSubmit = (e) => {
    e.preventDefault();
    const user = { email: femail };

    setLoading(true);

    Api.post(`/user/updatePassword/`, user)
      .then((response) => {
        setError(false);
        setLoading(false);

        setError("Check Mail");
        setFemail("");
        setOpen(true);
        setText("Check your mail. It may take upto a minute.");
        console.log(response);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        console.log(err?.response?.status);
        setError("could not reset password");
        if (err?.response?.status == 401) setText("No Account Found. Try Again");
        else setText("Server busy. Click again after 5 minutes");
        setOpen(true);
        setLoading(false);
        console.log(err);
      });
  };

  // const handleSignUpClick = () => {
  //   // TODO: Add your function logic here
  // };

  return (
    <div>
      {replace && !error ? (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={error}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            You are Successfully Registered Now Login
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}

      {error ? (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={error}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {typeof error === 'object' ? error.message || JSON.stringify(error) : error}
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}

      <div className={styles.signinContainer}>
        <div className={styles.imageSection}>
          <div className={styles.imagePlaceholder}>
            <img src= "/SignIn.png" alt="Sign In" />
          </div>
        </div>
        
        <div className={styles.formSection}>
          <div className={styles.formContent}>
            <h2>{forget ? "RESET PASSWORD" : "Sign In"}</h2>
            <p>{forget ? "Enter your email to reset password" : "Enter your credentials to access your account"}</p>
            
            <form onSubmit={forget ? handleForgetSubmit : handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  value={forget ? femail : formData.email}
                  onChange={forget ? (e) => setFemail(e.target.value) : handleChange}
                  required
                  className={styles.input}
                  placeholder=" "
                  autoComplete="email"
                />
                <label className={styles.label}>Email Address</label>
              </div>
              
              {!forget && (
                <div className={styles.inputGroup}>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <input
                      type={fieldType}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder=" "
                      autoComplete="current-password"
                    />
                    <label className={styles.label}>Password</label>
                    <span
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#da1e1eff",
                      }}
                      onClick={toggleVisibility}
                      className="material-symbols-outlined"
                    >
                      {fieldType === "password" ? "visibility" : "visibility_off"}
                    </span>
                  </div>
                </div>
              )}

              <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
                <span
                  style={{ cursor: "pointer", color: "#007bff", textDecoration: "underline" }}
                  onClick={() => setForget(!forget)}
                >
                  {forget ? "Sign In" : "Forgot password ?"}
                </span>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                {loading ? (
                  <span style={{ marginRight: "9px", marginTop: "5px" }}>
                    <TailSpin width="20" height="12" /> Processing
                  </span>
                ) : (
                  ""
                )}
                <span>{forget ? "Reset Password" : "Sign In"}</span>
              </button>

              {/* {!forget && (
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <p>
                    NEW HERE?{" "}
                    <span 
                      onClick={handleSignUpClick}
                      style={{ color: "#007bff", textDecoration: "underline", cursor: "pointer" }}
                    >
                      SIGN UP
                    </span>
                  </p>
                </div>
              )} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;