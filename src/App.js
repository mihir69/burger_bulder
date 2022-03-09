import React, { Component } from 'react'
import BurgerBuilder from './Containers/BurgerBuldier/BurgerBuilder'
import Layout from './Components/Layouts/Layout'
import classes from './App.module.css'
import Aux from '../src/HOC/Auxiliary'
import CheckOut from './Containers/CheckOut/CheckOut'
import { Route, Switch } from 'react-router-dom'
import Orders from './Containers/Orders/Orders'
export default class App extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.visible}>
          <Layout>
            <Switch>
              <Route path="/Checkout" component={CheckOut} />
              <Route path="/Orders" component={Orders}/>
              <Route path="/" component={BurgerBuilder} />
            </Switch>


          </Layout>

        </div>
      </Aux>
    )
  }
}
