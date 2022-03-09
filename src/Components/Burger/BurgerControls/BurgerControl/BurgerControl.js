import React from 'react';
import classes from './BurgerControl.module.css';
const BurgerControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less}
        onClick={props.Remove}
        disabled={props.deceble}
      >Less</button>
      <button className={classes.More}
        onClick={props.add}>more</button>
    </div>

  )
}
export default BurgerControl;