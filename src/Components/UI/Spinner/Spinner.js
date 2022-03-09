import React from 'react'
import classes from './Spinner.module.css'

const Spinner = () =>{
  return(
      <div>
      <div className={classes.Loader}> </div>
      <strong className={classes.Load}></strong>
      </div>
   )
   
}
export default Spinner;