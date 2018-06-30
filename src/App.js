
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ActivityIndicator, AsyncStorage } from 'react-native'
import { Actions, Router, Scene } from 'react-native-router-flux'
import { Root } from 'native-base'

import Login from './Components/Login'
import HomePage from './Components/HomePage'

import { loginActions } from './_actions'

class App extends Component {

  constructor(){
    super()

    this.state = {
      hasToken: false,
      isLoaded: false
    }
  }

  componentDidMount() {

    const { dispatch } = this.props

    AsyncStorage.getItem('id_token').then((token) => {

      console.log(token)
      // dispatch(loginActions.checkAuth())

      if (token !== null){
        this.setState({
          hasToken: true,
          isLoaded: true
        })
      } else {
        this.setState({
          hasToken: false,
          isLoaded: true
        })
        Actions.Login()
      }
    })
  }

  render() {

    const { auth } = this.props
    // console.log(auth)
    if (!this.state.isLoaded){
      return (
        <ActivityIndicator />
      )
    } else {
      return(
        <Root>
          <Router>
            <Scene key="root">
              <Scene
                component={ Login }
                hideNavBar={true}
                initial={!this.state.hasToken}
                key="Login"
                title="Login"
              />
              <Scene
                component={HomePage}
                hideNavBar={true}
                initial={this.state.hasToken}
                key="HomePage"
                title="Home Page"
              />
            </Scene>
          </Router>
        </Root>
      )
    }
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

// App.defaultProps = {
//   className: ''
// }

function mapStateToProps(state) {
  // console.log(state)
  const { auth } = state
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
