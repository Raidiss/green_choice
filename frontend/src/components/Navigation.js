import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import UserNavigation from './UserNavigation';
import '../App.css';
import HamburgerButton from './HamburgerButton/HamburgerButton';
import NavItems from './NavItems/NavItems';

class Navigation extends Component {
    state={
        show:false
    }

    handleClick = () => {
        this.setState({show: !this.state.show})
    }

    render(){
        const {show} = this.state
        return(
            <div className='navbar'>
            <HamburgerButton onClick={this.handleClick}/>
            <NavItems show={show}/>
            </div>
        )
    }
    }


export default Navigation;