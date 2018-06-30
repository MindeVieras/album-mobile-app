
import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import App from './src/App'
import configureStore from './src/Config'

const store = configureStore()

const AlbumApp = () => (
  <Provider store={ store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent('album_mobile_app', () => AlbumApp)
