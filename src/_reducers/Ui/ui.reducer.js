
import { uiConstants } from '../../_constants'

const initialState = {
  sidebar_open: false
}

export function ui(state = initialState, action) {
  switch (action.type) {
  case uiConstants.UI_SIDEBAR_OPEN:
    return {
      sidebar_open: action.sidebar_open
    }
  default:
    return state
  }
}
