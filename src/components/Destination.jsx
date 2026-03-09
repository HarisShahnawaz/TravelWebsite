import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img5 from "../assets/5.jpg";
import img8 from "../assets/8.jpg";

import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano in Batangas, Philippines, is one of the world's smallest
         yet most active volcanoes, sitting dramatically within the vast Taal Lake. 
         It is a complex volcano island within a lake, which is itself set within a larger
          caldera — making it a rare island within a lake on an island geological wonder.
           Despite its modest size, Taal has a long history of powerful and deadly eruptions,
            with over 30 recorded since the 1500s. Its most recent significant eruption 
            occurred in January 2020, sending a massive ash plume kilometers into the sky a
            nd forcing thousands of nearby residents to evacuate."
        img1={img1}
        img2={img2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daduldul Batangas"
        text="Mt. Daduldul is a scenic volcano located in Batangas, Philippines, known for its stunning 
        crater lake and lush surrounding landscape. Standing at approximately 640 meters above sea level,
         it offers a rewarding climb suitable for beginner to intermediate hikers. The trail winds through
          dense vegetation, with the breathtaking view of the caldera lake at the summit making every step 
          worthwhile. It is also a popular spot for camping, allowing visitors to witness spectacular sunrises 
          over the Batangas countryside. Mt. Daduldul is truly a hidden gem that perfectly blends adventure 
          and natural beauty."
        img1={img5}
        img2={img8}
      />
    </div>
  );
};

export default Destination;
