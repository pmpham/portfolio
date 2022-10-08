import React from "react";
import {
  Body2, Card
} from "ui-neumorphism";
import "./About.css";
import Desc from "./data/about.json";

const About = () => {
 return (
  <div className="about_div">
   <img className="picture" src="peter.png" alt="picture of my sexy face" style={{padding:5}}></img>
   <Card className="about_card" inset={true} maxWidth={360}>
    <h3 className="name">peter pham</h3>
    {Desc.map((desc) => {
     return <Body2>{desc.desc}<br/><br/>contact me at peterphambusiness@gmail.com</Body2>;
    })}
   </Card>
  </div>
 );
};

export default About;
