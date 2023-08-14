import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { pathname } = window.location;
  const [activeLink, setActiveLink] = useState(pathname);
  const navigate = useNavigate();

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },

    {
      title: "About Us",
      path: "/about-us",
    },

    {
      title: "Blog",
      path: "/blog",
    },

    {
      title: "Services",
      path: "/services",
    },

    {
      title: "Faq",
      path: "/faq",
    },

    {
      title: "Contact",
      path: "/contact",
    },
  ];

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <nav className="d-flex">
      <div className="container d-flex align-items-center justify-content-between">
        <Link onClick={() => setActiveLink("/")} to="/" className="brand">
          <img src="/image/logo.svg" alt="logo" />
        </Link>

        {/* Desktop view */}
        <ul className="navbar-nav desktop-view d-flex flex-row">
          {navLinks.map((item, i) => (
            <li key={i} className="nav-item position-relative">
              <Link
                onClick={() => setActiveLink(item.path)}
                to={item.path}
                className={`nav-link ${
                  activeLink === item.path && "active-nav-link"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <button className="btn btn-primary desktop-view">Sign In</button>

        {/* Mobile view */}
        <button
          className="nav-menu-btn mobile-view "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
          >
            <g clipPath="url(#clip0_49_6087)">
              <path
                d="M0 1.05C0.0711123 1.01111 0.0601719 0.933333 0.0820526 0.872222C0.273509 0.366667 0.743944 0.0222222 1.28002 0.0111111C1.34566 0.0111111 1.41678 0.0111111 1.48242 0.0111111C7.47773 0.00555556 13.4785 0.0166667 19.4738 0C20.2123 0 20.8085 0.35 20.9781 1.08333C20.9781 1.08889 20.9891 1.08889 20.9945 1.08889C20.9945 1.26667 20.9945 1.45 20.9945 1.62778C20.9289 1.66111 20.9344 1.73333 20.9179 1.78333C20.7265 2.31111 20.2561 2.65556 19.6981 2.66667C19.6325 2.66667 19.5613 2.66667 19.4957 2.66667C13.5059 2.66667 7.51602 2.66667 1.52618 2.66667C0.694712 2.66667 0.355561 2.43333 0.032821 1.64444C0.0273509 1.63333 0.0109403 1.63333 0 1.62222C0 1.43889 0 1.24444 0 1.05Z"
                fill="#333333"
              />
              <path
                d="M21.0001 14.9615C20.9345 14.9948 20.94 15.067 20.9236 15.117C20.7321 15.6448 20.2617 15.9892 19.7037 16.0003C19.6381 16.0003 19.567 16.0003 19.5013 16.0003C13.5115 16.0003 7.52164 16.0003 1.53179 16.0003C0.700327 16.0003 0.361177 15.767 0.0384363 14.9781C0.0329661 14.967 0.0165556 14.967 0.00561523 14.9559C0.00561523 14.7615 0.00561523 14.567 0.00561523 14.3726C0.0767275 14.3337 0.0657872 14.2559 0.0876679 14.1948C0.279124 13.6892 0.749559 13.3448 1.28017 13.3337C1.34581 13.3337 1.41692 13.3337 1.48256 13.3337C7.47787 13.3337 13.4787 13.3392 19.474 13.3281C20.2124 13.3281 20.8087 13.6781 20.9783 14.4115C20.9783 14.417 20.9892 14.417 20.9947 14.417C21.0001 14.6003 21.0001 14.7837 21.0001 14.9615Z"
                fill="#333333"
              />
              <path
                d="M21.0001 8.29447C20.9345 8.3278 20.94 8.40002 20.9236 8.45002C20.7321 8.9778 20.2617 9.32224 19.7037 9.33335C19.6381 9.33335 19.567 9.33335 19.5013 9.33335C13.5115 9.33335 7.52164 9.33335 1.53179 9.33335C0.700327 9.33335 0.361177 9.10002 0.0384363 8.31113C0.0329661 8.30002 0.0165556 8.30002 0.00561523 8.28891C0.00561523 8.09447 0.00561523 7.90002 0.00561523 7.70558C0.0767275 7.66669 0.0657872 7.58891 0.0876679 7.5278C0.279124 7.02224 0.749559 6.6778 1.28017 6.66669C1.34581 6.66669 1.41692 6.66669 1.48256 6.66669C7.47787 6.66669 13.4787 6.67224 19.474 6.66113C20.2124 6.66113 20.8087 7.01113 20.9783 7.74447C20.9783 7.75002 20.9892 7.75002 20.9947 7.75002C21.0001 7.93335 21.0001 8.11669 21.0001 8.29447Z"
                fill="#333333"
              />
            </g>
            <defs>
              <clipPath id="clip0_49_6087">
                <rect width="21" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>

        {/* Mobile menu */}

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog m-0">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <ul className="navbar-nav d-flex">
                  {navLinks.map((item, i) => (
                    <NavLink
                      key={i}
                      navigate={navigate}
                      setActiveLink={setActiveLink}
                      activeLink={activeLink}
                      link={item.path}
                      title={item.title}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ setActiveLink, activeLink, link, title, navigate }) => (
  <li className="nav-item position-relative">
    <Link
      onClick={() => {
        setActiveLink(link);
        navigate(link);
      }}
      to={link}
      className={`nav-link ${activeLink === link && "active-nav-link"}`}
      data-bs-dismiss="modal"
      aria-label="Close"
    >
      {title}
    </Link>
  </li>
);

export default Navbar;
