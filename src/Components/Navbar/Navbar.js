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
          <AiOutlineMenu style={{ margin: "1rem 0" }} />
        </a>
      </div>
      <input type="checkbox" id="nav-toggle-state" checked={MobileMenu} />

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            <button className="button " onClick={toggler}>
              <span className="icon is-small">
                <AiOutlineMenu />
              </span>
            </button>
          </a>
          <a className="navbar-item">
            <span className="icon ">
              <i class="fas fa-search" />
            </span>
          </a>
        </div>

        <div className="navbar-end">
          {" "}
          <a className="navbar-item">
            <span className="icon is-small" style={{ margin: "0.2rem 0" }}>
              <i className="fas fa-plus" />
              <p style={{ margin: "0 0.2rem " }}>Add</p>
            </span>
          </a>
          <a className="navbar-item">
            <span className="icon ">
              <i class="far fa-envelope" />
            </span>
          </a>
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
