import React from "react";
import { Button, IconButton, Fab } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import { Link, ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
 return (
  <div className="navbar">
   <div className="navbar_links">
    <Link to="about" smooth={true}>
     <Button rounded={true}>About</Button>
    </Link>
    <Link to="experience" smooth={true}>
     <Button rounded={true}>Experience</Button>
    </Link>
    <Link to="projects" smooth={true}>
     <Button rounded={true}>Projects</Button>
    </Link>
    <Link
     to="resume"
     onClick={() =>
      window.open(
       "https://docs.google.com/document/d/1L3-4cyQOSWq54dMzx7wBvf_QYLFukrYl-gZOf5jfXZo/edit?usp=sharing"
      )
     }
    >
     <Button rounded={true}>Resume</Button>
    </Link>
   </div>
   <div className="navbar_icons">
    <Link onClick={() => window.open("https://github.com/pmpham")}>
     <IconButton size="small" text={false} rounded={true}>
      <div className="github_icon">
       <img src="./icons/github.png" sizes=""></img>
      </div>
     </IconButton>
    </Link>
    <Link
     onClick={() => window.open("https://www.linkedin.com/in/peterminhpham/")}
    >
     <IconButton size="small" text={false} rounded={true}>
      <div className="linkedin_icon">
       <img src="./icons/linkedin.png" sizes=""></img>
      </div>
     </IconButton>
    </Link>
   </div>
  </div>
 );
};

export default Navbar;
