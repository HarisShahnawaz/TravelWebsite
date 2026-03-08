import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Serviceimg from "../assets/1.jpg";

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
    </>
  );
}

export default Service;
