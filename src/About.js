import React from "react";
import {
 Card,
 CardHeader,
 CardContent,
 CardMedia,
 Body2,
} from "ui-neumorphism";
import "./About.css";
import Desc from "./data/about.json";

const About = () => {
 return (
  <div className="about_div">
   <img className="picture" src="peter.png"></img>
   <Card className="about_card" inset={true} maxWidth={360}>
    <h3 className="name">Peter Pham</h3>
    {Desc.map((desc) => {
     return <Body2>{desc.desc}</Body2>;
    })}
   </Card>
  </div>
 );
};

export default About;
