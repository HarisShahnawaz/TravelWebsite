import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You Can Discover unique Destinations using Google Maps.</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip In Indonesia"
          text="Indonesia is a vast archipelago in Southeast Asia, made up of
           over 17,000 islands and home to hundreds of distinct cultures and languages.
            From the lush rice terraces of Bali to the ancient temples of Java and the dense rainforests of Borneo,
             its landscapes are incredibly diverse."
        />
        <TripData
          image={Trip2}
          heading="Trip In Pakistan"
          text=" Pakistan, officially the Islamic Republic of Pakistan, is a South Asian nation blessed with an extraordinary diversity
           of landscapes, cultures, and history. From the towering peaks of the Karakoram and Himalayas in the north to
            the golden beaches of the Arabian Sea in the south, the country offers some of the most breathtaking scenery
             on earth. "
        />
        <TripData
          image={Trip3}
          heading="Trip In France"
          text="France is a Western European nation renowned worldwide for its art,
           culture, cuisine, and timeless elegance, drawing millions of visitors every year.
            From the romantic streets of Paris and the iconic Eiffel Tower to the sun-soaked vineyards 
            of Bordeaux and the glamorous French Riviera, its landscapes are as varied as they are breathtaking."
        />
      </div>
    </div>
  );
}

export default Trip;
