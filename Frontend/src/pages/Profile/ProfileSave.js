import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import Api from '../../API/Api';
import male from '../../images/male_avatar.jpg'
import female from '../../images/female_avatar.jpg'
import unknown from '../../images/unknown_avatar.png'
import { useNavigate } from 'react-router-dom';
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
      setUser(res.data.user)
      setMob(res.data.user.phone)
      setClg(res.data.user.college)
      setCity(res.data.user.city)
      setState(res.data.user.state)
      setAuth(true);
    }).catch((err) => {
      window.location.href = '/';
      setAuth(false);
    })


  }, [])

  const handleClick = async (user, ph, clg, ct, st) => {
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
        navigate("/Profile") 
    }
    catch(e){
        console.log(e);
    }
}

  return (
    <div className={styles.cont}>
      <Navbar show={auth} />
      <div className={styles.profileCard}>
        <div className={styles.leftPanel}>
          <div className={styles.avatar}>
            <img src={auth ? (user.gender === "MALE" ? male : user.gender === "FEMALE" ? female : unknown) : unknown} alt="avatar" />
          </div>
          <div className={styles.name}>{auth ? `${user.first_name} ${user.last_name}` : 'Guest User'}</div>
          <div className={styles.role}>{auth ? user.college || 'Student' : 'Not signed in'}</div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.headRow}>
            <div className={styles.headTitle}>Edit Profile</div>
            <div className={styles.actions}>
              <button className={styles.btnGhost} onClick={() => navigate('/Profile')}>Cancel</button>
              <button className={styles.btnPrimary} onClick={() => {handleClick(user, mob, clg, city ,state)}}>Save</button>
            </div>
          </div>

          <div className={styles.fieldGrid}>
            <div className={styles.field}>
              <div className={styles.label}>First name</div>
              <input className={styles.input} value={auth ? user.first_name : ''} readOnly />
            </div>
            <div className={styles.field}>
              <div className={styles.label}>Last name</div>
              <input className={styles.input} value={auth ? user.last_name : ''} readOnly />
            </div>
            <div className={styles.field}>
              <div className={styles.label}>Gender</div>
              <input className={styles.input} value={auth ? user.gender : ''} readOnly />
            </div>
            <div className={styles.field}>
              <div className={styles.label}>Mobile</div>
              <input className={styles.input} value={mob} onChange={(e) => setMob(e.target.value)} />
            </div>
            <div className={styles.field}>
              <div className={styles.label}>Email</div>
              <input className={styles.input} value={auth ? user.email : ''} readOnly />
            </div>
            <div className={styles.field}>
              <div className={styles.label}>College</div>
              <input className={styles.input} value={clg} onChange={(e) => setClg(e.target.value)} />
            </div>
            <div className={styles.field}>
              <div className={styles.label}>City</div>
              <input className={styles.input} value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className={styles.field}>
              <div className={styles.label}>State</div>
              <input className={styles.input} value={state} onChange={(e) => setState(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSave
