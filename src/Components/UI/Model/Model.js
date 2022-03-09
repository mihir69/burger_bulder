import React, { Component } from 'react'
import classes from './Model.module.css'
import Aux from '../../../HOC/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'
// import { render } from '@testing-library/react';
//  import OrderSummery from '../../Burger/OrderSummery/OrderSummery'
class Model extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    )
  }
  componentWillUpdate() {
    console.log('in mmodel')
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} click={this.props.backg}></Backdrop>
        <div
          className={classes.Model}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          <p>{this.props.children}</p>
        </div>
      </Aux>
    )
  }
}

export default Model

//  <div className={classes.Model}>
//   <OrderSummery  ingridients={props.ingridients} />
//  <p>{props.children}</p>
//  </div>
