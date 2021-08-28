import { combineReducers } from 'redux'

// import postsReducer from './postsSlice'

import postsReducer from './postNewSlice';
import usersReducer from './userProfileSlice';
import authReducer from './aurhSlice';

const rootReducer = combineReducers({
  // posts: postsReducer,
  posts: postsReducer,
  users: usersReducer,
  auth: authReducer
})

export default rootReducer