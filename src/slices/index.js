import { combineReducers } from 'redux'

// import postsReducer from './postsSlice'

import postsReducer from './postNewSlice';
import userProfileReducer from './userProfileSlice';

const rootReducer = combineReducers({
  // posts: postsReducer,
  posts: postsReducer,
  userProfiles: userProfileReducer
})

export default rootReducer