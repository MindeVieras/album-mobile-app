
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-native'
import { Text, TouchableOpacity } from 'react-native'
import { Container, Drawer } from 'native-base'

import Albums from './Albums'
import Faces from './Faces'
import Trash from './Trash'
import NotFound from './NotFound'

import Header from './Partials/Header'
import MenuSidebar from './Partials/MenuSidebar'

import { uiActions } from '../../_actions'

class Main extends Component {

  closeDrawer() {
    const { dispatch } = this.props
    dispatch(uiActions.sidebarOpen(false))
  }

  render() {

    const { match, sidebar_open } = this.props

    return (
      <Drawer
        content={ <MenuSidebar /> }
        onClose={ this.closeDrawer.bind(this) }
        open={ sidebar_open }
      >
        <Container>
          <Header />

          <Switch>
            <Route exact path={ match.url } component={ Albums } />
            <Route exact path={`${match.url}/faces`} component={ Faces } />
            <Route exact path={`${match.url}/trash`} component={ Trash } />

            <Route component={ NotFound } />

          </Switch>

        </Container>
      </Drawer>
    )
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  sidebar_open: PropTypes.bool
}

Main.defaultProps = {
  sidebar_open: false
}

function mapStateToProps(state) {
  const { sidebar_open } = state.ui
  return {
    sidebar_open
  }
}

export default withRouter(connect(mapStateToProps)(Main))
