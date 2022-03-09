import React from 'react';
import classes from './Navitem.module.css'
import {NavLink} from 'react-router-dom';
const Navitem = (props) => (
    <ul className={classes.Navitem} >
        <NavLink to={props.link}
        activeClassName={classes.active}
        exact={props.exact} >
            {props.children}
        </NavLink>
    </ul>
)
export default Navitem;