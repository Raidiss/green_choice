import React from "react";
import { NavLink } from "react-router-dom";
import UserNavigation from "./UserNavigation";

import Logo from './logo.jpg'

import './styles.css';

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light">
      <NavLink className="navbar-brand" activeClassName="active" to="/">
        <img style={{ width: 60 }} src={ Logo } alt="Logo" />
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
          <UserNavigation />
        </div>
      </nav>

  // <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <img src={ Logo } className="d-block w-100" alt="..."/>
  //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  //     <div className="navbar-nav">
  //       <NavLink activeClassName="nav-item active" to="/">
  //         Home
  //       </NavLink>
  //       <NavLink activeClassName="nav-item" to="/products">
  //         Products
  //       </NavLink>
  //       <NavLink activeClassName="nav-item" to="/news">
  //         News
  //       </NavLink>
  //       <NavLink activeClassName="nav-item" to="/about">
  //         About
  //       </NavLink>
  //       <NavLink activeClassName="nav-item" to="/contact">
  //         Contact Us
  //       </NavLink>
  //     </div>
  //   </div>
  //   <span className="navbar-text">
  //     <UserNavigation />
  //   </span>
  // </nav>
);

export default Navigation;
