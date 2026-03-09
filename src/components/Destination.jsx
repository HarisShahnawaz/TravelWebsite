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
        heading="Swat Valley , Pakistan"
        text="Swat Valley, located in Khyber Pakhtunkhwa, Pakistan, is often called the Switzerland of Asia
         for its breathtaking natural beauty. It is adorned with lush green meadows, snow-capped mountains,
          crystal-clear rivers, and dense forests that attract thousands of tourists every year. The valley
           is also rich in history, once serving as a major center of Buddhist civilization, with ancient
            ruins and stupas still visible today. The Swat River flows gracefully through the valley, 
            adding to its scenic charm and supporting the local agriculture. Despite facing challenges 
            in the past, Swat has emerged as one of Pakistan's most beloved and peaceful tourist destinations."
        img1={img1}
        img2={img2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Naran Valley , Pakistan"
        text="Naran is a picturesque town situated in the upper Kaghan Valley of Khyber Pakhtunkhwa,
         Pakistan, at an elevation of about 2,400 meters above sea level. It is most famous for the magnificent 
         Saiful Muluk Lake, one of the highest lakes in Pakistan, which is surrounded by towering snow-capped
          peaks and reflects the sky like a giant mirror. The town is blessed with lush green landscapes, 
          cold fresh air, and the soothing sound of the Kunhar River flowing right through it. Naran is a 
          paradise for trekkers, nature lovers, and photographers who come in large numbers during the summer season"
        img1={img5}
        img2={img8}
      />
    </div>
  );
};

export default Destination;
