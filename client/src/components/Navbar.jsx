import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          <span>📞 +91 98765 43210</span>
          <span>✉ info@carewellhospital.com</span>
          <span>◷ 24/7 Emergency Services</span>
        </div>

        <div className="top-right">
          <span>♙ Help Desk</span>
          <span>♙ Track Appointment</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">

        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">✚</div>

          <div className="logo-text">
            <h2>CareWell</h2>
            <span>HOSPITAL</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Buttons */}
        <div className="nav-buttons">
          <Link to="/login" className="signin-btn">
            ♙ Sign In
          </Link>

          <Link to="/register" className="signup-btn">
            ♙ Sign Up
          </Link>
        </div>

      </nav>
    </>
  );
}

export default Navbar;