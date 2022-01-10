import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
      <header className="header-nav">
        <nav className="navbar">
          <ul className="nav-links">
          <li>
              <Link className="nav-links-a" to="/Cool-drinks/">
                Cool Drinks
              </Link>
            </li>
            <li>
              <Link className="nav-links-a" to="/Cool-drinks/">
                Acceuil
              </Link>
            </li>
            <li>
              <Link className="nav-links-a" to="/Cool-drinks/Boissons chaudes">
                Boissons chaudes
              </Link>
            </li>
            <li>
              <Link className="nav-links-a" to="/Cool-drinks/Boissons froides">
                Boissons froides
              </Link>
            </li>
            <li>
              <Link className="nav-links-a" to="/Cool-drinks/Gourmandises">
                Gourmandises
              </Link>
            </li>
            <li>
              <Link className="nav-links-a" to="/Cool-drinks/Contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-links-a" to="/Cool-drinks/Admin">
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;