import React from 'react';
import LeftContent from 'components/LeftContent/LeftContent';
import RightContent from 'components/RightContent/RightContent';
import classes from "./MainView.module.scss";

const MainView = () => {
  return (
    <div className={classes.container}>     
        <LeftContent />
        <RightContent />
    </div>
  );
}

export default MainView;
