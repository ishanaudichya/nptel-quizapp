// Navbar.js

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">
        <div className="navbar__logo">
          {/* You can replace 'YourLogo' with your actual logo */}
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2021/10/12/EN-logo-design-vector-Graphics-18678640-1-580x386.jpg"
            alt="YourLogo"
          />
          <span>Eznptel</span>
        </div>
      </Link>
      <div className="navbar__links">
        <Link to="/quiz" className="navbar__link">
          Quiz
        </Link>
        <Link to="/solutions" className="navbar__link">
          Solutions
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
