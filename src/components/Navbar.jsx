import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <ul className="nav-menu">
          <Link>
            <i className="fa-sharp-duotone fa-light fa-house-user"></i>Home
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
