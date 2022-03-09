import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummery.module.css'
const CheckoutSummery = (props) => {
    return (
        <div className={classes.CheckoutSummery}>
            <h1>This is what you will get as Order</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingridients={props.ingridients} />
            </div>
            <Button 
                clicking={props.CancelMethode}
                btn='Danger'>Cancel</Button>
            <Button
                 clicking={props.ContinueMethode}
                btn='Success'>Continue</Button>
        </div>
    )
}
export default CheckoutSummery;