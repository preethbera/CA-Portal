import React from 'react'
import styles from './contact.module.css';
import Card from './Card/Card';
import saket from '../../images/saket.jpeg'
import shuvam from '../../images/shuvam.jpeg'

function Contact() {
  return (
    <div className={styles.covv}>
      <h2 className={styles.heading}>CONTACT US</h2>
      <div className={styles.main}>
          <Card img={shuvam} name="Avinash Ghuge" job="Publicity and Media Head, Megashows Coordinator, Overseas Coordinator" num="7058598614" email="ghuge.avinash@ktj.in" fb = "https://www.facebook.com/profile.php?id=61552726551110&mibextid=ZbWKwL" li="https://www.linkedin.com/in/avinash-ghuge-7b5224295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"/>
          {/* <Card img={Kajal} name="Kajal Singh" job="Publicity Head, Design Coordinator, Auto Expo Coordinator" num="8433450232" email="singh.kajal@ktj.in" fb = "https://www.facebook.com/profile.php?id=100016684572655" li="https://www.linkedin.com/in/kajal-singh-164242213"/> */}
          <Card img={saket} name="Kshitij Kamble" job="Publicity and Media Head, Design Coordinator, Exhibition and Auto-Expo Coordinator" num="8956508116" email="kshitij.kamble@ktj.in" fb = "https://www.facebook.com/profile.php?id=100095652065104&mibextid=LQQJ4d" li="https://www.linkedin.com/in/kshitij-kamble-75b079287/"/>
      </div>
    </div>
  );
}

export default Contact;