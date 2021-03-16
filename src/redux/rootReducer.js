import { combineReducers } from 'redux'

import oneReducer from './reducers/'
const RootReducer = combineReducers({
  data: oneReducer,
})

export default RootReducer
