import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';
// import Navbar from '../../components/navbar/navbar';
import Api from '../../API/Api';
import male from '../../images/male_avatar.jpg'
import female from '../../images/female_avatar.jpg'
import unknown from '../../images/unknown_avatar.png'
import { Navigate, useNavigate } from 'react-router-dom';
// import Navbar from '../../components/navbar/Navbarnew';
import Navbar from '../../components/navbar/Navbarnew';
const ProfileSave = () => {
  const [mob, setMob] = useState("")
  const [clg, setClg] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")

  const [user, setUser] = useState("");
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
      setMob(res.data.user.phone)
      setClg(res.data.user.college)
      setCity(res.data.user.city)
      setState(res.data.user.state)
      // console.log(user)
      setAuth(true);
    }).catch((err) => {

      window.location.href = '/';
      // return <Redirect to="/login" />;
      console.log(err);
      setAuth(false);
    })


  }, [])

  const handleClick = async (user, ph, clg, ct, st) => {
    // console.log(opt)
    try{
        const requestOptions = {
            method: 'POST',
            headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + localStorage.getItem('token') 
            },
        };
        const res = await Api.post("/user/profileedit",
        {
            ca_id: user.ca_id,
            phone: ph,
            college: clg, 
            city: ct, 
            state: st,
        }
        , requestOptions);
        const data = await res.data;
        // console.log(data);
        navigate("/Profile") 
    }
    catch(e){
        console.log(e);
    }
}


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
              <h1 className={styles.pageTitle}>Edit Profile</h1>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button 
                  className={styles.editButton}
                  style={{ 
                    background: 'transparent', 
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-color)' 
                  }}
                  onClick={() => navigate("/Profile")}
                >
                  Cancel
                </button>
                <button 
                  className={styles.editButton} 
                  onClick={() => handleClick(user, mob, clg, city, state)}
                >
                  Save Changes
                </button>
              </div>
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
                  value={mob}
                  onChange={(e) => setMob(e.target.value)}
                  placeholder="Enter mobile number"
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
                  value={clg}
                  onChange={(e) => setClg(e.target.value)}
                  placeholder="Enter college name"
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>City</label>
                <input 
                  type="text" 
                  className={styles.fieldInput}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city"
                />
              </div>
              
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>State</label>
                <input 
                  type="text" 
                  className={styles.fieldInput}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Enter state"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSave
