import React from "react";
import airbnblogo from "../Images/airbnb-logo.png";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <img src={airbnblogo} alt="airbnblogo" className="nav--logo" />
    </nav>
  );
}