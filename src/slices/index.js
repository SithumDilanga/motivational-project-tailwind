import { combineReducers } from 'redux'

// import postsReducer from './postsSlice'

import postsReducer from './postNewSlice';
import usersReducer from './userProfileSlice';

const rootReducer = combineReducers({
  // posts: postsReducer,
  posts: postsReducer,
  users: usersReducer
})

export default rootReducer