import classes from './Order.module.css';
import React from 'react';
const Order = (props) => {
    const ingri = [];
    for(let IngriName in props.ingridients)
    {
        ingri.push({
            Name: IngriName,
            amount: props.ingridients[IngriName] 
        }
        );
    }
        const ioutput = ingri.map(order=>{
            return(<span 
                style={{
                    textTransform:'capitalize',
                    display:'inline-block',
                    margin:'0 8px',
                    padding: '3px 3px 3px 3px',
                    borderRadius:'8px 8px 8px 8px',
                    border: '1px solid #ccc',
                 
                }}
                key={order.Name}>  {order.Name} ({order.amount})</span>)
        }
        

        )

    return (
        <div className={classes.Order}>
            <h3>ingredients: {ioutput}</h3>
            <h2   >price==>{props.Price}</h2>
        </div>
    );
}
export default Order;