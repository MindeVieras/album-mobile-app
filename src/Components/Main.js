
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  AsyncStorage,
  Alert,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { withRouter } from 'react-router-native'
import { Container, Drawer } from 'native-base'

import Header from './Partials/Header'
import MenuSidebar from './Partials/MenuSidebar'

import { loginActions, uiActions } from '../_actions'
import styles from './styles'

class Main extends Component {

  userLogout() {
    const { dispatch, history } = this.props
    dispatch(loginActions.logout(history))
  }

  closeDrawer() {
    const { dispatch } = this.props
    dispatch(uiActions.sidebarOpen(false))
  }

  render() {

    const { sidebar_open } = this.props

    return (
      <Drawer
        content={ <MenuSidebar navigator={ this.navigator } /> }
        onClose={ this.closeDrawer.bind(this) }
        open={ sidebar_open }
      >
        <Container>
          <Header />
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={this.userLogout.bind(this)}
          >
            <Text style={styles.buttonText} >
              Log out
            </Text>
          </TouchableOpacity>
        </Container>
      </Drawer>
    )
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  sidebar_open: PropTypes.bool
}

Main.defaultProps = {
  sidebar_open: false
}

function mapStateToProps(state) {
  // console.log(state)
  const { sidebar_open } = state.ui
  return {
    sidebar_open
  }
}

export default withRouter(connect(mapStateToProps)(Main))
