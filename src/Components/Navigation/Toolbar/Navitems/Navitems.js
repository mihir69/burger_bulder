import React from 'react';
import classes from './Navitems.module.css';
import Navitem from './Navitem/Navitem'
const Navitems = (props) =>(
    <div className={classes.Navitems}>
    <Navitem link='/' exact >MyBurger</Navitem>
    <Navitem link='/Orders'>Orders</Navitem>
    </div>
)
export default Navitems