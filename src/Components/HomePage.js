
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  AsyncStorage,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import { loginActions } from '../_actions'
import styles from './styles'

class HomePage extends Component {

  userLogout() {
    const { dispatch } = this.props
    dispatch(loginActions.logout())
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../images/chuck_norris.png')}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={this.userLogout.bind(this)}
        >
          <Text style={styles.buttonText} >
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(HomePage)
