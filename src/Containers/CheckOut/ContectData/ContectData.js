import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContectData.module.css';
import insta from '../../../Axios-order';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input'
class ContectData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                isTouch:false,
            },
            Address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'address',
                },
                value: '',
                validation: {
                    required: true,
                },
                
                valid: false,
                
                isTouch:false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'G-mail',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                isTouch:false,
            },
            zipcode:
            {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'zipcode',
                },
                value: '',
                validation: {
                    required: true,
                    Finallen : 5,
                }
                ,
                valid: false,
                isTouch:false,
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'country name',
                },
                value: '',
                validation: {
                    required: true,
                },
                
                valid: false,
                isTouch:false,
            },
            DeliveryType: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' },
                    ]
                },
                value: 'fastest',
                validation: {
                    required: false,
                },
                isTouch:false,
                   valid:true
            },
        },

        Loading: false,
        FormIsValid: false,
    }
    checkValidity = (value,rules) => {
        let isValid = false;
        if(  rules.required){
            isValid = value.trim() !== '';
        }
        if(rules.Finallen)
        {
            isValid = value.length === rules.Finallen;
        }
        return isValid;
    }
    
    OrderHandler = (event) => {
        event.preventDefault();
        let order = {};
        for (let orderprop in this.state.orderForm) {
            order[orderprop] = this.state.orderForm[orderprop].value;
        }
        this.setState({ Loading: true, })
        const CusOrderInfo = {
            Ingri: this.props.ingridients,
            Amount: this.props.TotalPrise,
            orderData: order,
        }
        insta.post('/Orders.json', CusOrderInfo)
            .then(this.setState({ Loading: true }),
                this.props.history.push('/'),
            )
            .catch(this.setState({ Loading: true }));
        // s tore a data in firebase

    }
    changeHandler = (event, InputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm,
        }
        const updatedFormElement = {
            ...updatedOrderForm[InputIdentifier],
        }
        updatedFormElement.value = event.target.value;
        
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.isTouch = true
        updatedOrderForm[InputIdentifier] = updatedFormElement;
       
       let checkForm = true;
       for(let check in updatedFormElement)
       {   
           checkForm =  updatedFormElement[check].valid &&checkForm;
       } 
       console.log(this.state.FormIsValid && checkForm )
       
        this.setState({ orderForm: updatedOrderForm ,FormIsValid:checkForm });
    }
    render() {
        let formelementArray = [];
        for (let key in this.state.orderForm) {
            formelementArray.push({
                id: key,
                config: this.state.orderForm[key],
            })
        }

        let form = (
            <div className={classes.ContectData}>
                <h4 style={{ textAlign: 'center' }}>Enter your contect detail</h4>
                <form onSubmit={this.OrderHandler} >
                    {
                        formelementArray.map(element => (
                            <Input
                                key={element.id}
                                elementType={element.config.elementType}
                                elementConfig={element.config.elementConfig}
                                value={element.config.value}
                                changed={(event) => this.changeHandler(event, element.id)}
                                Invalid={!element.config.valid}
                                Needvalidation={element.config.validation.required}
                                checkTouch = {element.config.isTouch}
                                ></Input>
                        ))
                    }
                    <Button btn='Success'
                     disabled={this.state.FormIsValid}
                      >Order</Button>
                </form>
            </div>

        );
        if (this.state.Loading)
            form = <Spinner />
        return (
            <div>
                {form}
            </div>


        );

    }
}
export default ContectData;