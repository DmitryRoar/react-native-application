import {postReducer} from './reducers/post'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  post: postReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))