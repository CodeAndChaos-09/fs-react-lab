import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">FS React Lab</h2>
      <div className="nav-links">
        <Link to="/">Product</Link>
        <Link to="/library">Library</Link>
        <Link to="/class-hierarchy">Class Hierarchy</Link>
      </div>
    </nav>
  );
}

export default Navbar;
