import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Fatih G.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./About" className="nav-link" href="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./Contact" className="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./Product" className="nav-link" href="#">
                Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
