
import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Spinner as Sp } from 'native-base'

import styles from './styles'

const Spinner = ({ color }) => {
  return (
    <View style={ styles.spinner_wrapper }>
      <Sp />
    </View>
  )
}

Spinner.propTypes = {
  color: PropTypes.string
}

Spinner.defaultProps = {
  color: ''
}

export default Spinner
