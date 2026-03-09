import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Serviceimg from "../assets/1.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={Serviceimg}
        title="SERVICE"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
