import React from "react";
import About from "../About";
import Experience from "../Experience";
import Navbar from "../components/Navbar";
import "./Home.css"

const Home = () => {
 return (
  <div>
   <div>
    <section id="about">
     <About />
    </section>
    <section id="experience" >
     <Experience />
    </section>
   </div>
  </div>
 );
};

export default Home;
