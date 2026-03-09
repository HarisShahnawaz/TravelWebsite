import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contactimg from "../assets/2.jpg";
import Footer from "../components/Footer";

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
      <Footer />
    </>
  );
}

export default Contact;
