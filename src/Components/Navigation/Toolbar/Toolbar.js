import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Navitems from './Navitems/Navitems'
import HamBurger from '../Toolbar/HamBurger/HamBurger'
const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
        <HamBurger  canu={props.manu}  />
          
            <div className={classes.Logo}>
                <Logo />
            </div>

            <nav className={classes.DesktopOnly}>
                <Navitems />
            </nav>
        </header>
    )
}
export default Toolbar

// <div className={classes.vis} onClick={props.manu}>MANU</div>