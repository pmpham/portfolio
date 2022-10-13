import React from "react";
import { Body2, Card } from "ui-neumorphism";
import Exp from "./data/experience.json";
import "./Experience.css";

const Experience = () => {
 return (
  <div>
   <h2 style={{ textAlign: "center", fontSize: 40 }}>
    experience
   </h2>
   <div style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}>
    <Card width={270} elevation={3} style={{ padding: 10, paddingTop: 0, margin:10, marginTop:0 }}>
     {" "}
     <h2>amazon</h2>{" "}
     <Body2 style={{ color: "#89CFF0" }}>
      sde intern
      <br />
      upcoming summer 2023
     </Body2>
    </Card>
   </div>
   <div className="experience">
    <div className="experience_cards">
     {Exp.map((exp) => {
      return (
       <Card maxWidth={300} elevation={3}>
        <div className="experience_card_info">
         <h2>{exp.company}</h2>
         <Body2 style={{ color: "#89CFF0" }}>
          {exp.position}
          <br />
          {exp.tenure}
         </Body2>
         <p
          style={{
           whiteSpace: "pre-wrap",
           textAlign: "left",
           fontSize: "small",
           paddingTop: "5px",
          }}
         >
          {exp.responsibilities}
         </p>
        </div>
       </Card>
      );
     })}
    </div>
   </div>
  </div>
 );
};

export default Experience;
