import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            Taal Volcano in Batangas, Philippines, is one of the world's
            smallest yet most active volcanoes, sitting dramatically within the
            vast Taal Lake. It is a complex volcano island within a lake, which
            is itself set within a larger caldera — making it a rare "island
            within a lake on an island" geological wonder. Despite its modest
            size, Taal has a long history of powerful and deadly eruptions, with
            over 30 recorded since the 1500s. Its most recent significant
            eruption occurred in January 2020, sending a massive ash plume
            kilometers into the sky and forcing thousands of nearby residents to
            evacuate. Today, Taal remains a popular tourist destination and an
            active subject of close monitoring by Philippine volcanologists.
          </p>
        </div>

        <div className="image">
          <img src={img1} alt="Taal Volcano aerial view" />
          <img src={img2} alt="Taal Volcano landscape view" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
