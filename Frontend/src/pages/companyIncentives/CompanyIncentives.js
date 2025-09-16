import React from "react";
import styles from "./CompanyIncentives.module.css";
import abhibus from "../../images/abhibus.jpg";
import elm from "../../images/elm.jpg";
import stackedge from "../../images/stackEdge.jpeg";

import Card from "./ScrapperCard";
// import { Divide } from 'lucide-react';
function CompanyIncentives() {
  return (
    <div style={{ minHeight: "50vh", boxSizing: "border-box", textAlign: "center" }}>
      <h2 className={styles.heading}>Gift From Partners</h2>
      <div className={styles.companyIncentivesGrid}>
        <div className={styles.cardWrapper}>
          <Card
          img={"https://i.ibb.co/ZRLXzmKx/Screenshot-2025-09-12-at-12-10-00-AM.png"}
          title={"Skill Ladder"}
          subtitle={"EdTech Platform"}
          desc={"The top 50 Campus Ambassadors will get free upskilling courses that are available on their website"}
          link={"https://skillladders.com/"}
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
          img={"https://i.ibb.co/nVDHkyG/Screenshot-2025-09-12-at-12-03-56-AM.png"}
          title={"IALM"}
          subtitle={"E-Learning Platform"}
          desc={"The top 50 Campus Ambassadors will get a 50% discount on all Law courses available on their website"}
          link={"https://ialm.academy/"}
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
          img={"https://i.ibb.co/4gJ5TBj0/Screenshot-2025-09-12-at-12-06-28-AM.png"}
          title={"Experiment Labs"}
          subtitle={"EdTech Platform"}
          desc={"Campus Ambassadors will get upto 100% discounts on their mentorship programs based on their performance"}
          link={"https://experimentlabs.in/"}
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
          img={"https://i.ibb.co/4nTRkhWc/Screenshot-2025-09-12-at-12-13-29-AM.png"}
          title={"Tripple One Solutions"}
          subtitle={"E-Learning Platform"}
          desc={"Campus Ambassadors will get upto 100% discounts on their mentorship programs based on their performance"}
          link={"https://trippleonesolutions.com/"}
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
          img={"https://i.postimg.cc/bJdFxm8c/Screenshot-2025-09-16-at-5-45-38-PM.png"}
          title={"Elearnmarkets"}
          subtitle={"E-Learning Platform"}
          desc={"Elearnmarkets will provide courses worth Rs. 2,500/- each for top 50 Campus Ambassadors of Kshitij 2026"}
          link={"https://www.elearnmarkets.com/"}
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyIncentives;
