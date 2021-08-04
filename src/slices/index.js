import { combineReducers } from 'redux'

import postsReducer from './postsSlice'

import usersReducer from './postNewSlice';

const rootReducer = combineReducers({
  // posts: postsReducer,
  posts: usersReducer
})

export default rootReducer