import React, { Component } from 'react';

class UserNavigation extends Component {
    render() {
        return (
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Sign In<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/products">Register</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserNavigation;