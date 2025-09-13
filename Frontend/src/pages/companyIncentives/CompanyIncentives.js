import React from "react";
import styles from "./CompanyIncentives.module.css";
import abhibus from "../../images/abhibus.jpg";
import elm from "../../images/elm.jpg";
import stackedge from "../../images/stackEdge.jpeg";

import Card from "./ScrapperCard";
// import { Divide } from 'lucide-react';
function CompanyIncentives() {
  return (
    <div style={{ minHeight: "50vh", contentAlign: "center" }}>
      <h2 className={styles.heading}>Gift From Partners</h2>
      <div className={styles.companyIncentivesGrid}>
        <Card
          img={"https://i.ibb.co/ZRLXzmKx/Screenshot-2025-09-12-at-12-10-00-AM.png"}
          title={"Skill Ladder"}
          subtitle={"EdTech Platform"}
          desc={"The top 50 Campus Ambassadors will get free upskilling courses that are available on their website"}
        />
        <Card
          img={"https://i.ibb.co/nVDHkyG/Screenshot-2025-09-12-at-12-03-56-AM.png"}
          title={"IALM"}
          subtitle={"E-Learning Platform"}
          desc={"The top 50 Campus Ambassadors will get a 50% discount on all Law courses available on their website"}
        />
        <Card
          img={"https://i.ibb.co/4gJ5TBj0/Screenshot-2025-09-12-at-12-06-28-AM.png"}
          title={"Experiment Labs"}
          subtitle={"EdTech Platform"}
          desc={"Campus Ambassadors will get upto 100% discounts on their mentorship programs based on their performance"}
        />
        <Card
          img={"https://i.ibb.co/4nTRkhWc/Screenshot-2025-09-12-at-12-13-29-AM.png"}
          title={"Triple One Solutions"}
          subtitle={"E-Learning Platform"}
          desc={"Campus Ambassadors will get upto 100% discounts on their mentorship programs based on their performance"}
        />
      </div>
    </div>
  );
}

export default CompanyIncentives;
