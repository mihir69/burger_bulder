import React from 'react';
import BurgerLogo from '../../Assets/Images/MyBurger.png'
import classes from './Logo.module.css'
const logo = (props) =>(
  <div className={classes.Logo} style={{height:props.height}} >
  <img src={BurgerLogo} alt="MyBurger"/>
  </div>
)
export default logo;