import React from 'react';
import classes from './BurgerControls.module.css'
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]
const BurgerControls = (props) => (
    <div className={classes.BurgerControls}>
        <h2>TotalPrice: <strong>{props.priceing} &#8360;</strong>  </h2>

        {controls.map(ctrl => <BurgerControl
            key={ctrl.label}
            label={ctrl.label}
            add={() => props.added(ctrl.type)}
            Remove={() => props.removed(ctrl.type)}
            deceble={props.decebled[ctrl.type]}
        />)}
        <button
            onClick={props.Ordered}
            className={classes.OrderButton}
            disabled={!props.Purchaseable}
        >ORDER NOW</button>
    </div>
)
export default BurgerControls;