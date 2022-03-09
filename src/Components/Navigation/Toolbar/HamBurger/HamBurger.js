import React from 'react';
import classes from './HamBurger.module.css'
const HamBurger = (props) => (
    <div onClick={props.canu} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)
export default HamBurger