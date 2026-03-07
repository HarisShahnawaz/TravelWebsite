import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img12 from "../assets/12.jpg";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={img12}
        title="YOUR JOURNEY YOUR STORY"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
