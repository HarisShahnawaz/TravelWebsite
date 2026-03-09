import { Component } from "react";
import "./Destination.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img src={this.props.img1} alt="Taal Volcano aerial view" />
          <img src={this.props.img2} alt="Taal Volcano landscape view" />
        </div>
      </div>
    );
  }
}
export default DestinationData;
