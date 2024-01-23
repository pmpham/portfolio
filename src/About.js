import React from "react";
import {
  Body2, Card
} from "ui-neumorphism";
import "./About.css";
import Desc from "./data/about.json";
import { Link } from "react-scroll";

const About = () => {
 return (
  <div className="about_div">
   <img className="picture" src="peter.png" alt="my sexy face" style={{padding:5}}></img>
   <Card dark={true} className="about_card" inset={true} maxWidth={360}>
    <h3 className="name">peter pham</h3>
    {Desc.map((desc) => {
     return (<><Body2 style={{textAlign:"left", color: "white"}}>{desc.desc}</Body2><Body2 style={{justifyContent:"left", color: "white"}}>{desc.contact}</Body2></>);
    })}
   </Card>
   <Card dark={true} className="social_links" inset={true} style={{margin:5}}>
   <div className="navbar_icons">
    <Link onClick={() => window.open("https://github.com/pmpham")}>
     <div className="github_icon">
      <img src="./icons/github.png" alt="github icon" sizes=""></img>
     </div>
    </Link>
    <Link
     onClick={() => window.open("https://www.linkedin.com/in/peterminhpham/")}
    >
     <div className="linkedin_icon">
      <img src="./icons/linkedin.png" alt="linkedin icon" sizes=""></img>
     </div>
    </Link>
   </div>
   </Card>
  </div>
 );
};

export default About;
