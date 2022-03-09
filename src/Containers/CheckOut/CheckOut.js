import React, { Component } from 'react';
import CheckoutSummery from '../../Components/Order/CheckOutSummery/CheckoutSummery';
import { Route } from 'react-router-dom';
import ContectData from '../CheckOut/ContectData/ContectData'
class CheckOut extends Component {
    state = {
        ingridients: null,
        TotalPrise: null,
    }
    CancelHandler = () => {
        this.props.history.goBack();
    }
    ContinueHandler = () => {
        this.props.history.push('/Checkout/Contect-data');
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingridients = {}; let Prise = 0;
        for (let param of query.entries()) {
            // [salad , 1 ]
           
            if (param[0] === 'Prise') {
                Prise = param[1];
            }
            else
                ingridients[param[0]] = +param[1];
        }
        this.setState({ ingridients: ingridients, TotalPrise: Prise });

    }

    render() {
        return (
            <div>
                <CheckoutSummery
                    CancelMethode={() => this.CancelHandler()}
                    ContinueMethode={() => this.ContinueHandler()}
                    ingridients={this.state.ingridients} />
                <Route path={this.props.match.path + '/Contect-data'}
                    render={(props) => (<ContectData ingridients={this.state.ingridients}
                        TotalPrise={this.state.TotalPrise}
                        {...props} />)} />
            </div>
        )
    }
}
export default CheckOut;