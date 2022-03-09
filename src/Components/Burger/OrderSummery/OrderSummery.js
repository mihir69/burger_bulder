import React from 'react'
import Aux from '../../../HOC/Auxiliary'
import Button from '../../UI/Button/Button'
const OrderSummery = (props) => {
  const IngriSum = Object.keys(props.ingridients).map((igKeys) => (
    <li key={igKeys}>
      {console.log('in ingrisum')}
      <span style={{ textTransform: 'capitalize' }}>{igKeys}</span> :{' '}
      {props.ingridients[igKeys]}
    </li>
  ))

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingridients:</p>
      {console.log('iin summery')}
      <ul>
        {IngriSum}
        <h3>
          <strong>Bill : {props.Bill}</strong>
        </h3>

        <p>check for more?</p>
      </ul>
      <Button clicking={props.succlick} btn="Success">
        Cancel
      </Button>
      <Button clicking={props.denclick} btn="Danger">
        Continue
      </Button>
    </Aux>
  )
}
export default OrderSummery
