import React, { Component } from 'react';

class UserNavigation extends Component {
    render() {
        return (
            <div>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Sign In<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/products">Register</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserNavigation;