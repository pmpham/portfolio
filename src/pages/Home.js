import React from "react";
import About from "../About";
import Experience from "../Experience";
import Navbar from "../components/Navbar";
import "./Home.css"
import Projects from "../Projects";

const Home = () => {
 return (
  <div>
   <div>
    <section id="about">
     <About />
    </section>
    <section id="experience" >
      <div style={{paddingTop:60}}></div>
     <Experience />
    </section>
    <section id="projects" >
    <div style={{paddingTop:60}}></div>
     <Projects />
    </section>
   </div>
  </div>
 );
};

export default Home;
