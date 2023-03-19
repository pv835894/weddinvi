import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Nav = () => {
  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke px-0">
          <h1>
            <Link className="navbar-brand" to="/">
              <span className="fa">
                <img
                  src={logo}
                  alt="weddinvi-logo"
                  width="50px"
                  height="50px"
                />
              </span>{" "}
              weddinvi
            </Link>
          </h1>
          <button
            className="navbar-toggler  collapsed bg-gradient"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item @@about__active">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* <li className="nav-item @@contact__active">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
