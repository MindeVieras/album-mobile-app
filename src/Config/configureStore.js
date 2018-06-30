
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../_reducers'

export default function configureStore() {
  let store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      createLogger
    )
  )
  return store
}
