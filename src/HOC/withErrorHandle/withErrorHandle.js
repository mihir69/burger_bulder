import React, { Component } from 'react'
import Model from '../../Components/UI/Model/Model'
import Aux from '../Auxiliary'
const withErrorHandle = (WrapComponent, insta) => {
  return class extends Component {
    state = {
      error: null,
    }
    componentWillMount() {
      this.resInterceptors = insta.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({
            error: error,
          })
          return error
        },
      )
      this.reqInterceptors = insta.interceptors.request.use((req) => {
        this.setState({
          error: null,
        })
        return req
      })
    }
    componentWillUnmount() {
      console.log('will unmount', this.resInterceptors, this.reqInterceptors)
      insta.interceptors.request.eject(this.reqInterceptors)
      insta.interceptors.response.eject(this.resInterceptors)
    }
    ErrorStateHandler = () => {
      this.setState({
        error: null,
      })
    }
    render() {
      return (
        <Aux>
          <Model backg={this.ErrorStateHandler} show={this.state.error}>
            {this.state.error ? this.state.error.message : null}
          </Model>
          <WrapComponent {...this.props} />
        </Aux>
      )
    }
  }
}
export default withErrorHandle

// if you want to use component you has to keep  frist letter capital
//   in simple java script in small letter rember
