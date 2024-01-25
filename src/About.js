import React, { Fragment, useEffect, useState } from "react";
import {
  Body2, Card
} from "ui-neumorphism";
import Desc from "./data/about.json";
import { Link } from "react-scroll";
import { Component } from "react";

const About = () => {
const [size, setSize] = useState(window.matchMedia("(max-width: 492px)").matches)
useEffect(()=>{
    window.matchMedia("(max-width: 442px)").addEventListener('change', e=> setSize(e.matches))
})

 return (
  <div className="about_div" style={{display:"flex", width:"100%", alignItems:"center", justifyContent:"center", padding:"10px", flexWrap:"wrap", gap: 10}}>
   <img className="picture" src="peter.png" alt="my sexy face" style={{padding:5, height: 200, borderRadius: 10}}></img>
   <Card dark={true} className="about_card" inset={true} maxWidth={360} style={{width:"100%", padding:10, paddingTop:0}}>
    <h3 className="name" style={{fontSize:"2rem"}}>peter pham</h3>
    {Desc.map((desc) => {
     return (<div><Body2 style={{textAlign:"left", color: "white", paddingBottom:10}}>{desc.desc}</Body2><Body2 style={{justifyContent:"left", color: "white"}}>{desc.contact}</Body2></div>);
    })}
   </Card>
   <Card dark={true} className="social_links" inset={true} style={{margin:5, padding:"0.5rem"}}>
   {!size && (<div className="navbar_icons" style={{display:"flex", flexDirection:"column", gap:10}}>
    <Link onClick={() => window.open("https://github.com/pmpham")}>
     <div className="github_icon" style={{width:30}}>
      <img src="./icons/github.png" alt="github icon" sizes="" width={30}></img>
     </div>
    </Link>
    <Link
     onClick={() => window.open("https://www.linkedin.com/in/peterminhpham/")}
    >
     <div className="linkedin_icon" style={{width:30}}>
      <img src="./icons/linkedin.png" alt="linkedin icon" sizes="" width={30}></img>
     </div>
    </Link>
   </div>)}
   {size && (<div className="navbar_icons" style={{display:"flex", flexDirection:"row",gap:10}}>
    <Link onClick={() => window.open("https://github.com/pmpham")}>
     <div className="github_icon" style={{width:30}}>
      <img src="./icons/github.png" alt="github icon" sizes="" width={30}></img>
     </div>
    </Link>
    <Link
     onClick={() => window.open("https://www.linkedin.com/in/peterminhpham/")}
    >
     <div className="linkedin_icon">
      <img src="./icons/linkedin.png" alt="linkedin icon" sizes="" width={30}></img>
     </div>
    </Link>
   </div>)}
   </Card>
  </div>
 );
};

export default About;
