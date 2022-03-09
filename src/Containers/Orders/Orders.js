import React, { Component } from 'react';
import Order from '../../Components/Order/Order'
import axios from '../../Axios-order';
import withErrorHandle from '../../HOC/withErrorHandle/withErrorHandle'
class Orders extends Component {
    state = {
        Orders: [],
        Loading: false,
    }
    componentDidMount() {

        axios.get('/Orders.json')
            .then(
                (res) => {
                    const FatchData = [];
                    for (let key in res.data) {
                        FatchData.push({
                            ...res.data[key],
                            id: key,
                        })
                    }
                    this.setState({ Orders: FatchData, Loading: false })
                    return res;
                }

            )
            .catch(

                error => {
                    this.setState({ Loading: false })
                    return error;
                }

            )
    }
    render() {
       
         
        return (
            <div>
           {
            this.state.Orders.map(order=>(
                <Order  key={order.id} 
                 ingridients={order.Ingri}
                 Price={+order.Amount} />
            ))
           }
                
            </div>
        );
    }
}
export default withErrorHandle(Orders,axios);