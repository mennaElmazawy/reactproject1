import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
   const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 20); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
   <>
   
     <nav className={`navbar navbar-expand-lg fixed-top ${shrink ? "navbar-shrink" : "py-4"}`}>
        <div className="container">
          <Link className="navbar-brand text-white text-uppercase fs-2 fw-bolder" to="/">
           Start Framework
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" aria-current="page" to="About">
                  About
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="Portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   
   </>
     
   
  );
}
