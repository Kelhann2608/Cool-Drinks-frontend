import { useDebugValue } from "react";
import { NavLink } from "react-router-dom";

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
              <NavLink className="nav-links-a" to="/Boissons chaudes">
                Boissons chaudes
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-links-a" to="/Boissons froides">
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
              <NavLink className="nav-links-a" to="/Admin">
                Admin
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;