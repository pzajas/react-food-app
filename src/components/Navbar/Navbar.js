import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-title">BRAND NAME</div>
      <div className="navbar-links">
        <ul>
          <li className="li">
            <NavLink to="/main">MAIN</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
