import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="Nav">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/about" className="links">
          About
        </Link>
        <Link to="/contact" className="links">
          Contact
        </Link>
        <Link to="/Services" className="links">
          Services
        </Link>
      </div>
    </>
  );
}

export default Navbar;
