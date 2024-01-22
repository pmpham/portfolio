import React from "react";
import { Link } from "react-scroll";
import { Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./Navbar.css";
import Pdf from '../data/PeterPhamResumePublic.pdf'

const Navbar = () => {
 return (
  <div className="navbar" style={{position:"sticky"}}>
   <div className="navbar_links">
    <Link className="about_button" smooth={true}>
     <Button
      rounded={true}
      onClick={() => {
       window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
     >
      About
     </Button>
    </Link>
    <Link to="experience" smooth={true} /* offset={-40} */>
     <Button rounded={true}>Experience</Button>
    </Link>
    <Link to="projects" smooth={true} /* offset={-40} */>
     <Button rounded={true}>Projects</Button>
    </Link>
    <Link onClick={() => window.open(Pdf)}
    >
     <Button rounded={true}>Resume</Button>
    </Link>
    {/* <div className="navbar_icons">
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
   </div> */}
   </div>
  </div>
 );
};

export default Navbar;
