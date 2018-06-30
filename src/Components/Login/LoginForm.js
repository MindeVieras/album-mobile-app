
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form, Button, Text } from 'native-base'
import { Field, reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import renderInput from '../Common/FormFields'

import { loginActions } from '../../_actions'

import styles from './styles'

class LoginForm extends Component {

  render() {

    const { handleSubmit, loading } = this.props

    return (
      <Form style={ styles.form }>
        <Field
          name="username"
          label="Username"
          component={ renderInput }
        />
        <Field
          name="password"
          placeholder="Password"
          component={ renderInput }
        />
        <Button
          style={ styles.button }
          onPress={ handleSubmit }
          block
        >
          <Text>Login</Text>
        </Button>
        <Button
          style={ styles.button }
          onPress={ () => Actions.HomePage() }
          block
        >
          <Text>Home</Text>
        </Button>
      </Form>
    )
  }
}

const validate = values => {
  const errors = {}
  const requiredFields = [
    'username',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}

function submit(values, dispatch, form) {
  const { username, password } = values
  dispatch(loginActions.login(username, password))
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

LoginForm.defaultProps = {
  loading: false
}

function mapStateToProps(state) {
  // console.log(state)
  const { loading } = state.auth
  return {
    loading
  }
}

export default reduxForm({
  form: 'login_form',
  onSubmit: submit,
  validate
})(LoginForm)
