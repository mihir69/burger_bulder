import React from 'react';
import BurgerIngridients from './BurgerIngridients/BurgerIngridients';
import classes from './Burger.module.css';
// import { Object } from 'prop-types';
const Burger = (props) =>{
  let  TransfromIngri = Object.keys(props.ingridients)
  .map(igKey=>{

        return  [...Array(props.ingridients[igKey])].map((_,i)=>{
           return  <BurgerIngridients key={igKey+i} type={igKey}/>
        })  });
  let  UP =  TransfromIngri.reduce((arr,el) => {
        return arr.concat(el)
    }, [] );
   
   
    if(UP.length === 0){
      
        TransfromIngri = <p>Please start Adding ingridients</p>
    }
   

    return(
        <div className={classes.Burger}>
        <BurgerIngridients type='bread-top'/>
        {TransfromIngri}
        <BurgerIngridients type='bread-bottom'/>
        </div>
    );

};
export default Burger;