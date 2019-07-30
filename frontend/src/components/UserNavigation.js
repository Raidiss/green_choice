import React, { Component } from 'react';

class UserNavigation extends Component {
    render() {
        return (
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/login">Sign In<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserNavigation;