
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-native'

import { Content, Left, Body, List, ListItem, Text, Icon } from 'native-base'

import { loginActions, uiActions } from '../../../../_actions'
import styles from './styles'

class MenuSidebar extends Component {

  handleLink(to) {
    const { dispatch, history } = this.props

    dispatch(uiActions.sidebarOpen(false))
    history.push(to)
  }

  handleLogout() {
    const { dispatch, history } = this.props
    dispatch(uiActions.sidebarOpen(false))
    dispatch(loginActions.logout(history))
  }

  render() {

    return (
      <Content style={ styles.drawerWrapper }>
        <List>
          <ListItem
            icon
            onPress={ () => this.handleLink('/') }
          >
            <Left>
              <Icon type="MaterialIcons" name="dashboard" />
            </Left>
            <Body>
              <Text>Albums</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
            onPress={ () => this.handleLink('/maisdfsad') }
          >
            <Left>
              <Icon type="MaterialIcons" name="face" />
            </Left>
            <Body>
              <Text>Faces</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
            onPress={ () => this.handleLink('/main/users') }
          >
            <Left>
              <Icon type="MaterialIcons" name="people" />
            </Left>
            <Body>
              <Text>Users</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
            onPress={ () => this.handleLink('/main/trash') }
          >
            <Left>
              <Icon type="Entypo" name="trash" />
            </Left>
            <Body>
              <Text>Trash</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
            onPress={ () => this.handleLogout() }
          >
            <Left>
              <Icon type="MaterialIcons" name="power-settings-new" />
            </Left>
            <Body>
              <Text>Logout</Text>
            </Body>
          </ListItem>
        </List>
      </Content>
    )
  }
}

MenuSidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(connect()(MenuSidebar))

