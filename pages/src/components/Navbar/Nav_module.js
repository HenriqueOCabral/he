import React, { Component } from "react";
import styles from "./Nav.module.css";


import HamburgerMenu from './HamburgerMenu/index'


class Navbar extends Component {

  render() {
    return (
      <div className={styles.Navbar}>

        
        <HamburgerMenu/>
      </div>
    );
  }
}

export default Navbar;
