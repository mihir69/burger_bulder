import React, { Component } from 'react'
import Aux from '../../HOC/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {
  state = {
    showSidedrawer: false,
  }
  Sidedrawerhendler = () => {
    this.setState({
      showSidedrawer: !this.state.showSidedrawer,
    })
  }
  render() {
    return (
      <Aux>
        <Toolbar manu={this.Sidedrawerhendler} />
        <Sidedrawer
          cnt={this.state.showSidedrawer}
          closed={this.Sidedrawerhendler}
        />
        <main className={classes.Layouts}>{this.props.children}</main>
      </Aux>
    )
  }
}
export default Layout
