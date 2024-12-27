// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import logo from '../assets/images/nav-logo.png'; // Use relative path to the image
const Header = () => {
  return (
    <header>
      <nav>
        `<div className="site-container">`
          <div className="nav-inner-main">
            {/* Logo Section */}
            <div className="nav-logo-bx">
              <Link className="nav-logo-link" to="/">
                <img src={logo} className="nav-logo-img" alt="logo" />
              </Link>
              <span className="nav-toggle-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--ic"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
                </svg>
              </span>
            </div>

            {/* Navigation Menu */}
            <div className="nav-menu-items">
              <div className="nav-menu-item-inner">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="nav-buttons">
              <div className="nv-btns-wrapper">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="site-btn" to="/register">
                  Register Now{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ic"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
