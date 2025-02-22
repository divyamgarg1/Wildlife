import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Wildlife Research Datasheets</div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/upload" className="nav-link">Upload</Link></li>
        <li><Link to="/analytics" className="nav-link">Analytics</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/team" className="nav-link">Team</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="/login" className="login-btn">Login/Signup</Link>
        {/* <Link to="/signup" className="signup-btn">Sign Up</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;