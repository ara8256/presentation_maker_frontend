import React from 'react';
// import './Navbar.css';

import logo from "./presentation_maker.png"

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src = {logo} style={{height:"8vh", width: "40vh" ,paddingLeft : "1vh", boxShadow:"inherit"}}/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link nav-link-custom fw-bold" href="#">Home</a>
            </li>
  
            <li className="nav-item">
              <a className="nav-link nav-link-custom fw-bold" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }


  export default Navbar