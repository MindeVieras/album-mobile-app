
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Content, Form, Card, CardItem, Body, Button, Text } from 'native-base'
import { Field, reduxForm } from 'redux-form'
import { withRouter, Link } from 'react-router-native'

import renderInput from '../Common/FormFields'
import Spinner from '../Common/Spinner'

import { loginActions } from '../../_actions'

import styles from './styles'

class Login extends Component {

  render() {

    const { handleSubmit, loading } = this.props
    return (
      <Container style={ styles.container }>
        <Content style={ styles.content }>
          <Card>
            <CardItem>
              <Body>
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
                </Form>
              </Body>
            </CardItem>
            {loading &&
              <Spinner />
            }
          </Card>
        </Content>
      </Container>
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
  const { history } = form
  const { username, password } = values
  dispatch(loginActions.login(username, password, history))
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

Login.defaultProps = {
  loading: false
}

function mapStateToProps(state) {
  // console.log(state)
  const { loading } = state.auth
  return {
    loading
  }
}

Login = connect(mapStateToProps)(Login)

export default withRouter(reduxForm({
  form: 'login_form',
  onSubmit: submit,
  validate
})(Login))
