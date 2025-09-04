import React from 'react'
import styles from './CompanyIncentives.module.css'
import abhibus from '../../images/abhibus.jpg'
import elm from '../../images/elm.jpg'
import stackedge from '../../images/stackEdge.jpeg' 
 
import Card from './ScrapperCard'
import { Divide } from 'lucide-react';
function CompanyIncentives() {
   return (
         <div style={{   minHeight:'100vh',contentAlign:'center'}}>
            <h1 style={{zIndex:"1000",textAlign:'center',color:'white',fontSize:'4rem'}}>Gift From Partners</h1>
            <div
      style={{
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(445px, 1fr))',

        rowGap: '30px',
        columnGap: '20px',
        padding: '12px',
      }}
    >
      <Card img={abhibus} title={"Red Bus"} subtitle={"Travel Partner"} desc={"Get amazing discounts on bus bookings."} /> 
      <Card img={elm} title={"ELM"} subtitle={"E-Learning Platform"} desc={"Access a wide range of online courses."} /> 
      <Card img={stackedge} title={"StackEdge"} subtitle={"Cloud Solutions"} desc={"Optimize your cloud infrastructure with us."} /> 
      <Card img={stackedge} title={"StackEdge"} subtitle={"Cloud Solutions"} desc={"Optimize your cloud infrastructure with us."} />   
    </div>
         </div>
   )
}

export default CompanyIncentives