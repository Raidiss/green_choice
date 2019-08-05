import React from "react";
import { NavLink } from "react-router-dom";
import UserNavigation from "./UserNavigation";

import Logo from './logo.jpg'

import './styles.css';

const Navigation = ({user}) => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <NavLink className="navbar-brand" activeClassName="active" to="/">
      <img style={{ width: 120, marginBottom: -10 }} src={Logo} alt="Logo" />
    </NavLink>

    <button className="navbar-toggler order-2" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse order-3 order-lg-1" id="navbarMenu">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/products">
            Products
              </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/news">
            News
              </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/about">
            About
              </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/contact">
            Contact Us
              </NavLink>
        </li>
      </ul>
    </div>

    <div className="collapse navbar-collapse order-4 order-lg-3" id="navbarMenu2">
      <UserNavigation user={user} />
    </div>
  </nav>
);

export default Navigation;
