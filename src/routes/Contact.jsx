import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contactimg from "../assets/2.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={Contactimg}
        title="CONTACT US"
        btnClass="hide"
      />
    </>
  );
}

export default Contact;
