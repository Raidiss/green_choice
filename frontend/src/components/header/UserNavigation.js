import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

class UserNavigation extends Component {
    render() {
        return (
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/login">
                    Login<span className="sr-only">(current)</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/register">
                    Register
                </NavLink>
            </li>
          </ul>
        );
    }
}

export default UserNavigation;