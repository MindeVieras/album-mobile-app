
import { AsyncStorage } from 'react-native'
import { Toast } from 'native-base'

import { baseServerUrl } from '../../Config'
import { userConstants } from '../../_constants'
import { loginService } from '../../_services'

export const loginActions = {
  login,
  logout
}

function login(username, password, history) {
  return dispatch => {
    dispatch(request())

    loginService.login(username, password)
      .then(res => {
        console.log(res)
        if (res.ack == 'ok') {
          const user = res.data
          dispatch(success(user))
          if (history) {
            history.push('/')
          }
        } else {
          dispatch(failure(res.msg))
          Toast.show({
            text: res.msg,
            buttonText: 'Ok',
            type: 'danger',
            duration: 3000
          })
        }
      })
      .catch(err => {
        console.log(`loginService error: ${err}`)
      })
  }

  function request() { return { type: userConstants.LOGIN_REQUEST } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(history) {
  return dispatch => {
    console.log(history)
    history.push('/login')
    AsyncStorage.removeItem('id_token')
      .then(() => {
        dispatch(logout())
        // Actions.Login()
      })
      .catch(err => {
        console.log('AsyncStorage error: ' + err.message)
      })
  }

  function logout() { return { type: userConstants.LOGOUT } }
}
