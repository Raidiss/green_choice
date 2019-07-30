import React from "react";
import { NavLink } from "react-router-dom";
import UserNavigation from "./UserNavigation";
import "../App.css";

const Navigation = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink activeClassName="nav-item active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="nav-item" to="/products">
            Products
          </NavLink>
          <NavLink activeClassName="nav-item" to="/news">
            News
          </NavLink>
          <NavLink activeClassName="nav-item" to="/about">
            About
          </NavLink>
        </div>
      </div>
      <span className="navbar-text">
        <UserNavigation />
      </span>
    </nav>
  </div>
);

export default Navigation;
