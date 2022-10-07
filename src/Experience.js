import React from "react";
import "./Experience.css";
import { Body1, Body2, Card, CardHeader, H1, H2 } from "ui-neumorphism";
import Exp from "./data/experience.json";

const Experience = () => {
 return (
  <div className="experience_cards">
   {Exp.map((exp) => {
    return <Card maxWidth={360} elevation={3}><div className="experience_card_info"><h2>{exp.company}</h2><Body2>{exp.position}</Body2><p>{exp.responsibilities}</p></div></Card>;
   })}
  </div>
 );
};

export default Experience;
