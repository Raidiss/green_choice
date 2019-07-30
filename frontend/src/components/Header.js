import React, { Component } from 'react';
import Navigation from './Navigation';
import Search from './Search';

class Header extends Component {
    render() {
        return (
        <div className='header'>
         <Navigation/>
         <Search />
        </div>
        );
    }
}

export default Header;