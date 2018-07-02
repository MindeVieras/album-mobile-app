
import { uiConstants } from '../../_constants'

export const uiActions = {
  sidebarOpen
}

function sidebarOpen(sidebar_open) {
  return dispatch => {
    dispatch(open(sidebar_open))
  }

  function open(sidebar_open) { return { type: uiConstants.UI_SIDEBAR_OPEN, sidebar_open } }
}
