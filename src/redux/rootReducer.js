import { combineReducers } from 'redux'

import loading from './reducers/'

const RootReducer = combineReducers({
  loading,
})

export default RootReducer
