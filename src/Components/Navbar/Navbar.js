import React, { useState } from "react";
import "./Navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
const NavBar = ({ toggler }) => {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <nav
      className="navbar is-light is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setMobileMenu(!MobileMenu)}
        >
          <AiOutlineMenu />
        </a>
      </div>
      <input type="checkbox" id="nav-toggle-state" />

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            <button className="button " onClick={toggler}>
              <span className="icon is-small">
                <AiOutlineMenu />
              </span>
            </button>
          </a>
        </div>

        <div className="navbar-end">
          {" "}
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Mark Henry
              <div class="navbar-dropdown">
                <a class="navbar-item">Call</a>
                <a class="navbar-item">Message</a>
                <a class="navbar-item">Email</a>
              </div>
            </a>
          </div>
          <a className="navbar-item">
            <span className="icon is-small">
              <i className="fas fa-bell" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
