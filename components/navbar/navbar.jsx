import React from "react";
import { useEffect } from "react";
//import "./navbar.scss";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";

//import { AuthContext } from "../context/authContext/AuthContext";
//import { logout } from "../context/authContext/AuthActions";

const NavBar = () => {
  const loader = () => {
    //alert("hi");
    // show Preloader until the website ist loaded
    // $(window).on("load", function () {
    //   $(".loader").fadeOut("slow");
    // });

    $(document).ready(function () {
      $(".loader").fadeOut("slow");
    });
  };

  useEffect(() => {
    loader();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top top-nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <strong>HairTrust</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img src="assets/img/icons/menu.png" alt={""} />
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto text-sm-center text-md-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#price">
                  Prices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#book">
                  Book An Appointment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ml-auto search-box">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-search text-white"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
