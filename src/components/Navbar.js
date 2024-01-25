import React from "react";
import { Link } from "react-scroll";
import { Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import Pdf from '../data/PeterPhamResumePublic.pdf'
import { useState, useEffect } from "react";

const Navbar = () => {

    const [size, setSize] = useState(window.matchMedia("(max-width: 492px)").matches)
useEffect(()=>{
    window.matchMedia("(max-width: 492px)").addEventListener('change', e=> setSize(e.matches))
})

 return (
  <div className="navbar" style={{position:"sticky", display:"flex", justifyContent:"center", background:"#444444", top:0}}>
   <div className="navbar_links" style={{display: "flex", marginTop:10, marginBottom:10, gap:10}}>
    {!size && (<Link className="about_button" smooth={true}>
     <Button
    dark={true}
      rounded={true}
      onClick={() => {
       window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
     >
      About
     </Button>
    </Link>)}
    <Link to="experience" smooth={true} /* offset={-40} */>
     <Button dark={true} rounded={true}>Experience</Button>
    </Link>
    <Link to="projects" smooth={true} /* offset={-40} */>
     <Button dark={true} rounded={true}>Projects</Button>
    </Link>
    <Link onClick={() => window.open(Pdf)}
    >
     <Button dark={true} rounded={true}>Resume</Button>
    </Link>
   </div>
  </div>
 );
};

export default Navbar;
