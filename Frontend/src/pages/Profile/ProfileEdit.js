import React, { useState, useEffect } from 'react'
import styles from './Profile.module.css';
// import Navbar from '../../components/navbar/navbar';
import Api from '../../API/Api';
import male from '../../images/male_avatar.jpg'
import female from '../../images/female_avatar.jpg'
import unknown from '../../images/unknown_avatar.png'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbarnew';
const ProfileEdit = () => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false)
  let navigate = useNavigate();
  useEffect(() => {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    };



    Api.get(`/user/login_check`, requestOptions).then((res) => {

      // console.log(res.data);
      setUser(res.data.user)
      setAuth(true);
    }).catch((err) => {
      window.location.href = '/';
      console.log(err);
      setAuth(false);
    })


  }, [])

  return (
    <div className={styles.cont}>
      <Navbar show={auth} />
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <div className={styles.leftPanel}>
            <div className={styles.avatarWrapper}>
              <img 
                src={auth ? (user.gender === "MALE" ? male : user.gender === "FEMALE" ? female : unknown) : unknown}
                alt="Profile Avatar"
              />
            </div>
            <h2 className={styles.userName}>
              {auth ? `${user.first_name} ${user.last_name}` : "Guest User"}
            </h2>
            <p className={styles.userRole}>
              {auth ? (user.college || "Student") : "Not signed in"}
            </p>
          </div>

          <div className={styles.rightPanel}>
            <div className={styles.headerSection}>
              <h1 className={styles.pageTitle}>Profile</h1>
              <button 
                className={styles.editButton} 
                onClick={() => navigate("/ProfileSave")}
              >
                Edit Profile
              </button>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>First Name</label>
                <input 
                  type="text" 
                  className={styles.fieldInput}
                  value={auth ? user.first_name : ""} 
                  readOnly
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Last Name</label>
                <input 
                  type="text" 
                  className={styles.fieldInput}
                  value={auth ? user.last_name : ""} 
                  readOnly
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Gender</label>
                <input 
                  type="text" 
                  className={styles.fieldInput}
                  value={auth ? user.gender : ""} 
                  readOnly
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Mobile Number</label>
                <input 
                  type="text" 
                  className={styles.fieldInput}
                  value={auth ? user.phone : ""} 
                  readOnly
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Email</label>
                <input 
                  type="email" 
                  className={`${styles.fieldInput} ${styles.fullWidth}`}
                  value={auth ? user.email : ""} 
                  readOnly
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>College Name</label>
                <input 
                  type="text" 
                  className={`${styles.fieldInput} ${styles.fullWidth}`}
                  value={auth ? user.college : ""} 
                  readOnly
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>City</label>
                <input 
                  type="text" 
                  className={styles.fieldInput}
                  value={auth ? user.city : ""} 
                  readOnly
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>State</label>
                <input 
                  type="text" 
                  className={styles.fieldInput}
                  value={auth ? user.state : ""} 
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit
