import React from 'react'
import classes from './sidedrawer.module.css'
import Navitems from '../Toolbar/Navitems/Navitems'
import Logo from '../../Logo/Logo'
import Aux from '../../../HOC/Auxiliary'
import Backdrop from '../../UI/Backdrop/Backdrop'
const sidedrawer = (props) => {
  let attechclasses = [classes.Close, classes.SideDrawer]
  console.log(attechclasses)
  if (props.cnt) {
    attechclasses = [classes.Open, classes.SideDrawer]
  }
  console.log(attechclasses)
  return (
    <Aux>
      <Backdrop show={props.cnt} click={props.closed} />
      <div className={attechclasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <Navitems />
        </nav>
      </div>
    </Aux>
  )
}
export default sidedrawer
