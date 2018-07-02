
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { auth } from './Login/auth.reducer'
import { ui } from './Ui/ui.reducer'

const rootReducer = combineReducers({
  auth,
  ui,
  form: formReducer
})

export default rootReducer
