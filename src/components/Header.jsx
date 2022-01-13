import React from "react";
import { NavLink } from "react-router-dom";
import cadenas from "./Assets/cadenas.png";

const Header = () => {
  return (
    <div className="header">
      <header className="header-nav">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <NavLink className="nav-links-a" exact="true" to="/">
                Cool Drinks
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-links-a" exact to="/">
                Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-links-a" to="/BoissonsChaudes">
                Boissons chaudes
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-links-a" to="/BoissonsFroides">
                Boissons froides
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-links-a" to="/Gourmandises">
                Gourmandises
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-links-a" to="/Contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-links-a" to="/Admin" logo="cadenas">
                <img src={cadenas} alt="cadenas" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
