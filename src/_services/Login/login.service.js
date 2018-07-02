
import { AsyncStorage } from 'react-native'

import { baseServerUrl } from '../../Config'

export const loginService = {
  login
}

function login(username, password) {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  }

  return new Promise((resolve, reject) => {
    fetch(`${baseServerUrl}/api/auth`, requestOptions)
      .then((response) => response.json())
      .then(responseData => {
        if (responseData.ack == 'ok') {
          onValueChange('id_token', responseData.data.token)
        }
        resolve(responseData)
      })
      .catch(err => {
        console.log(`Error fetchng login service: ${err}`)
      })
  })
}

async function onValueChange(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue)
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message)
  }
}
