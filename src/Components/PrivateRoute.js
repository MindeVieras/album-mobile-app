
import React, { Component } from 'react'
import { ActivityIndicator, AsyncStorage } from 'react-native'
import { Route, Redirect } from 'react-router-native'

class PrivateRoute extends Component {
  constructor() {
    super()

    this.state = {
      hasToken: false,
      isLoaded: false
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      if (token !== null){
        this.setState({
          hasToken: true,
          isLoaded: true
        })
      } else{
        this.setState({
          hasToken: false,
          isLoaded: true
        })
      }
    })
  }

  render() {

    const { component: RouteComponent, ...rest } = this.props

    if (!this.state.isLoaded){
      return (
        <ActivityIndicator />
      )
    }
    else {
      return (
        <Route {...rest} render={ props => (
          this.state.hasToken
            ? <RouteComponent {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )} />
      )
    }
  }
}

export default PrivateRoute
