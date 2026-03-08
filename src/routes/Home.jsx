import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img12 from "../assets/12.jpg";
import Destination from "../components/Destination";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={img12}
        title="YOUR JOURNEY YOUR STORY"
        text="Choose Your Favourite Destination with HarryTours"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
    </>
  );
}

export default Home;
