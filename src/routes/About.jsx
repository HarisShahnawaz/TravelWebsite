import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutimg from "../assets/night.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={Aboutimg}
        title="ABOUT OUR WEBSITE"
        btnClass="hide"
      />
    </>
  );
}

export default About;
