import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutimg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

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
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
