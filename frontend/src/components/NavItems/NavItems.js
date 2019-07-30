import React from 'react';
import styles from './NavItems.module.css'

const NavItems = props =>{
    let attachedClasses = [styles.navitems, styles.hidden]
    if (props.show){
        attachedClasses= [styles.navitems, styles.show]
    }
    return(
       <nav className={attachedClasses.join(" ")}>
          <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Categories</li>
              <li>G News</li>
              <li>G Feed</li>
              <li>Contact Us</li>
          </ul> 
       </nav>
    )
}

export default NavItems