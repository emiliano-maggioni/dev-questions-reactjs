import React, { useState } from 'react';
import classes from "./Menu.module.scss";

type Props = {
  questions: string[];
}
const Menu = (props: Props) => {
  const [isMenuMobileOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <section className={`${classes.container} ${isMenuMobileOpen && classes.mobileOpen}`} >
      <div className={classes.menuLabel} >
        Menu
      </div>
      <input className={classes.menuToggle} id="menu-toggle" type="checkbox" onClick={() => setMenuOpen(!isMenuMobileOpen)} />
      <label className={classes.menuButtonContainer} htmlFor="menu-toggle">
        <div className={classes.menuButton}></div>
      </label>
      <div className={classes.menu} onClick={() => setMenuOpen(!isMenuMobileOpen)}>
        {props.questions.map((el: string, index: any) => <a key={index} className={classes.link} href={`#${el}`} >P {index + 1}</a>)}
      </div>
    </section>
  );
}

export default Menu;
