import React, {Component} from 'react';
import styles  from './HamburgerButton.module.css';
import NavItems from '../NavItems/NavItems';
import { tsPropertySignature } from '@babel/types';

const HamburgerButton = (props) =>{
        return(
        <div className={styles.HamburgerToggle} onClick={props.onClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        )
    }    

export default HamburgerButton;