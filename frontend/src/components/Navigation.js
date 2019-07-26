import React from 'react';
import { NavLink } from 'react-router-dom';
import UserNavigation from './UserNavigation';
import '../App.css';

const Navigation = () => (
    <div class="navbar navbar-expand-lg">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <NavLink activeClassName="nav-active" to="/">Home</NavLink>
            </li>
            <li class="nav-item">
                <NavLink activeClassName="nav-active" to="/products">Products</NavLink>
            </li>
            <li class="nav-item">
                <NavLink activeClassName="nav-active" to="/news">News</NavLink>
            </li>
            <li class="nav-item">
                <NavLink activeClassName="nav-active" to="/about">About</NavLink>
            </li>
        </ul>
        <span class="navbar-text">
            <UserNavigation />
        </span>
    </div>
);

export default Navigation;