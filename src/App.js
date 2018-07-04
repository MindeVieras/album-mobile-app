
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NativeRouter, Switch, Route } from 'react-router-native'
import { Root } from 'native-base'

import Login from './Components/Login'
import Main from './Components/Main'
import PrivateRoute from './Components/PrivateRoute'
import NotFound from './Components/NotFound'

class App extends Component {

  render() {
    return(
      <Root>
        <NativeRouter>
          <Switch>
            <PrivateRoute exact path="/" component={ Main } />
            <PrivateRoute path="/main" component={ Main } />
            <Route path="/login" component={ Login } />
            <PrivateRoute component={ NotFound } />
          </Switch>
        </NativeRouter>
      </Root>
    )
  }
}

export default App
