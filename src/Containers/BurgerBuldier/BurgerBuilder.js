import React, { Component } from 'react'
import Burger from '../../Components/Burger/Burger'
import BurgerControls from '../../Components/Burger/BurgerControls/BurgerControls'

import Model from '../../Components/UI/Model/Model'
import Aux from '../../HOC/Auxiliary'
import OrderSummery from '../../Components/Burger/OrderSummery/OrderSummery'
//  import OrderSummery from '../../Components/Burger/OrderSummery/OrderSummery'
import insta from '../../Axios-order'
import Spinner from '../../Components/UI/Spinner/Spinner'
import withErrorHandle from '../../HOC/withErrorHandle/withErrorHandle'
// import * as actionTypes from '../../store/actions'
// import {connect} from 'react-redux'

const List = {
  salad: 10,
  cheese: 25,
  meat: 50,
  bacon: 10,
}
class BurgerBuilder extends Component {
  state = {
    ingridients: null,
    Prise: 32,
    Purchaseable: false,
    Purchasing: false,
    Loading: false,
    error: null,
  }
  componentDidMount() {
    console.log(this.props)
    insta
      .get('https://myburger-2020.firebaseio.com/ingridients.json')
      .then((res) => {
        this.setState({
          ingridients: res.data,
        })
        return res
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        })
        return error
      })
  }
  PurchaseHendler = () => {
    this.setState({
      Purchasing: true,
    })
  }
  PurchaseState = (Ingri) => {
    let sum = Object.keys(Ingri)
      .map((igkey) => Ingri[igkey])
      .reduce((accu, cnt) => accu + cnt, 0)
    this.setState({
      Purchaseable: sum > 0,
    })
  }
  addIngridents = (type) => {
    const oldCount = this.state.ingridients[type]
    const updatedCount = oldCount + 1
    const UpdatedIngredients = {
      ...this.state.ingridients,
    }
    UpdatedIngredients[type] = updatedCount
    const priceAddition = List[type]
    const oldPrice = this.state.Prise
    const NewPrice = oldPrice + priceAddition
    this.setState({
      ingridients: UpdatedIngredients,
      Prise: NewPrice,
    })
    this.PurchaseState(UpdatedIngredients)
  }
  RemovedIngridents = (type) => {
    const oldcount = this.state.ingridients[type]
    if (oldcount === 0) return
    const Updatedcount = oldcount - 1
    const copystate = {
      ...this.state.ingridients,
    }
    copystate[type] = Updatedcount
    const oldPrice = this.state.Prise
    const DecresedPrise = List[type]
    const PriseDeduction = oldPrice - DecresedPrise
    this.setState({
      ingridients: copystate,
      Prise: PriseDeduction,
    })
    this.PurchaseState(copystate)
  }
  backGhendler = () => {
    this.setState({
      Purchasing: false,
    })
  }
  Continuehendler = () => {
    const queryParams = []
    for (let i in this.state.ingridients) {
      console.log(this.state.ingridients + '==>' + i)
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.state.ingridients),
      )
    }
    queryParams.push('Prise=' + this.state.Prise)
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/Checkout',
      search: '?' + queryString,
    })
  }

  render() {
    const decebledinfo = {
      ...this.state.ingridients,
    }
    for (const key in decebledinfo) {
      decebledinfo[key] = decebledinfo[key] <= 0
    }
    let OrderSummeryInfo = null
    // if (this.state.Loading)
    //     OrderSummeryInfo = <Spinner />
    let burger = this.state.error ? <h1>crash</h1> : <Spinner />
    if (this.state.ingridients) {
      burger = (
        <Aux>
          <Burger ingridients={this.state.ingridients} />
          <BurgerControls
            added={this.addIngridents}
            removed={this.RemovedIngridents}
            decebled={decebledinfo}
            priceing={this.state.Prise}
            Purchaseable={this.state.Purchaseable}
            Ordered={this.PurchaseHendler}
          />
        </Aux>
      )

      OrderSummeryInfo = (
        <OrderSummery
          denclick={this.Continuehendler}
          succlick={this.backGhendler}
          ingridients={this.state.ingridients}
          Bill={this.state.Prise}
        />
      )
    }

    return (
      <Aux>
        <Model backg={this.backGhendler} show={this.state.Purchasing}>
          {this.state.Loading ? <Spinner /> : OrderSummeryInfo}
        </Model>
        {burger}
      </Aux>
    )
  }
}
// const mapStateToProps = (state) => {
//     return {
//         ingrs: state.ingridients
//     }
// }
//  const mapDispatchToProps = (dispatch) => {
//     return {
//         toAddIngredient: (ingreName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingreName }),
//         toRemoveIngredient: (ingreName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingreName })
//     }
// }
export default withErrorHandle(BurgerBuilder, insta)
