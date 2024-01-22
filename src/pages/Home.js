import React from "react";
import About from "../About";
import Experience from "../Experience";
import Projects from "../Projects";
import "./Home.css";

const Home = () => {
 return (
  <div>
   <div>
    <section id="about">
     <About />
    </section>
    <section id="experience" >
      <div style={{paddingTop:40}}></div>
     <Experience />
    </section>
    <section id="projects" >
    <div style={{paddingTop:40}}></div>
     <Projects />
    </section>
   </div>
  </div>
 );
};

export default Home;
