import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
