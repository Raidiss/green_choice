import React, { Component } from 'react';
import Navigation from '../Navigation';
import Jumbotron from '../Jumbotron/Jumbotron'
class Header extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Jumbotron />
            </div>
        );
    }
}

export default Header;