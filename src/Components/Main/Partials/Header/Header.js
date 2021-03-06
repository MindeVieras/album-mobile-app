
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Container, Header as NbHeader, Right, Body, Title, Button, Icon } from 'native-base'

import { uiActions } from '../../../../_actions'

class Header extends Component {

  constructor() {
    super()
  }

  openMenuSidebar() {
    const { dispatch } = this.props
    dispatch(uiActions.sidebarOpen(true))
  }

  render() {
    return (
      <NbHeader>
        <Body>
          <Title>Album</Title>
        </Body>
        <Right>
          <Button
            onPress={ this.openMenuSidebar.bind(this) }
            transparent
          >
            <Icon name='menu' />
          </Button>
        </Right>
      </NbHeader>
    )
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Header)
