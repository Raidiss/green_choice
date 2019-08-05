import React, { Component } from 'react';

import { NavLink } from "react-router-dom";
import Axios from 'axios';

// import React from 'react';

// const UserNavigation = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default UserNavigation;

class UserNavigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user !== this.state.user) {
            this.setState({ user: nextProps.user });
        }
    }

    withUser = (user) => {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/products/add">
                        Add Product<span className="sr-only">(current)</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="#" onClick={this.signOut}>
                        Sign Out
                    </NavLink>
                </li>
            </ul>
        );
    }

    guest = () => {
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

    signOut = () => {
        Axios.get('/logout')
        .then(res => {
            this.setState({
                user: null
            });
        })
    }

    render() {
        const { user } = this.state;
        if (user) {
            return this.withUser(user);
        } else {
            return this.guest();
        }
    }
}

export default UserNavigation;