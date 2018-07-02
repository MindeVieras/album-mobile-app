
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-native'

import { Content, Body, Text } from 'native-base'

import styles from './styles'

class MenuSidebar extends Component {

  render() {
    return (
      <Content style={ styles.drawerWrapper }>
        <Body>
          <Text>This is sidebar menu</Text>
        </Body>
      </Content>
    )
  }
}

MenuSidebar.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // history: PropTypes.object.isRequired
}

export default withRouter(connect()(MenuSidebar))

