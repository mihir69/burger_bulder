import React from 'react';
// import classes from '*.module.css';
 import classes from './Button.module.css'
const Button = (props) =>(
    <button onClick={props.clicking}
    disabled={props.disabled}
    
     className={[  classes.Button , classes[props.btn]].join(' ')}>
     
    {props.children}
    </button>
);
export default Button


//   className={"Button  Success"}
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// var a = ['Wind', 'Water', 'Fire'];
// a.join();      // 'Wind,Water,Fire'
// a.join(', ');  // 'Wind, Water, Fire'
// a.join(' + '); // 'Wind + Water + Fire'
// a.join('');    // 'WindWaterFire'