import React from "react";
import styles from "./CompanyIncentives.module.css";
import abhibus from "../../images/abhibus.jpg";
import elm from "../../images/elm.jpg";
import stackedge from "../../images/stackEdge.jpeg";

import Card from "./ScrapperCard";
// import { Divide } from 'lucide-react';
function CompanyIncentives() {
  return (
    <div style={{ minHeight: "100vh", contentAlign: "center" }}>
      <h2 className={styles.heading}>Gift From Partners</h2>
      <div className={styles.companyIncentivesGrid}>
        <Card
          img={abhibus}
          title={"Red Bus"}
          subtitle={"Travel Partner"}
          desc={"Get amazing discounts on bus bookings."}
        />
        <Card
          img={elm}
          title={"ELM"}
          subtitle={"E-Learning Platform"}
          desc={"Access a wide range of online courses."}
        />
        <Card
          img={stackedge}
          title={"StackEdge"}
          subtitle={"Cloud Solutions"}
          desc={"Optimize your cloud infrastructure with us."}
        />
      </div>
    </div>
  );
}

export default CompanyIncentives;
