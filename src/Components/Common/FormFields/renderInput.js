
import React from 'react'
import PropTypes from 'prop-types'

import { Item, Input, Text } from 'native-base'

const renderInput = ({ input, label, type, meta: { touched, error, warning } }) => {

  let hasError= false
  if(error !== undefined){
    hasError= true
  }

  return (
    <Item error={ hasError }>
      <Input {...input}/>
      { hasError ? <Text>{ error }</Text> : <Text /> }
    </Item>

  )
}

renderInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
}

renderInput.defaultProps = {
  label: '',
  type: 'text',
  meta: {}
}

export default renderInput
