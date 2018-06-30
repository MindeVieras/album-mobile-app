
import React, { Component } from 'react'
import { Container, Content, Card, CardItem, Body } from 'native-base'

import LoginForm from './LoginForm'

import styles from './styles'

class Login extends Component {

  render() {

    return (
      <Container style={ styles.container }>
        <Content style={ styles.content }>
          <Card>
            <CardItem>
              <Body>
                <LoginForm />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default Login
