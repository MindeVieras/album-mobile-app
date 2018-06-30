
import { userConstants } from '../../_constants'

const initialState = {}

export function auth(state = initialState, action) {
  switch (action.type) {
  case userConstants.LOGIN_REQUEST:
    return {
      loading: true
    }
  case userConstants.LOGIN_SUCCESS:
    return {
      loggedIn: true,
      user: action.user
    }
  case userConstants.LOGIN_FAILURE:
    return {
      error: true,
      msg: action.error
    }
  case userConstants.LOGOUT:
    return {}
  default:
    return state
  }
}
