import React from 'react';
import classes from "./Menu.module.scss";

const Menu = () => {
  return (
    <section className={classes.container}>
    <div>
      Logo Here
    </div>
    <input  className={classes.menuToggle} id="menu-toggle" type="checkbox" />
    <label className={classes.menuButtonContainer} htmlFor="menu-toggle">
    <div className={classes.menuButton}></div>
  </label>
    <ul className={classes.menu}>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
  </section>
  );
}

export default Menu;
