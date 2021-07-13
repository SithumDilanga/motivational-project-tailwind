import { createSlice } from '@reduxjs/toolkit'

import postData from '../fakeApiData';

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
}

// A slice for recipes with our three reducers
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: state => {
      state.loading = true
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload
      state.loading = false
      state.hasErrors = false
    },
    getPostsFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// Asynchronous thunk action
export function fetchPosts() {
    return async dispatch => {
      dispatch(getPosts())
  
    //   try {
    //     const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    //     const data = await response.json()
  
    //     dispatch(getRecipesSuccess(data.meals))
    //   } catch (error) {
    //     dispatch(getRecipesFailure())
    //   }

		try {

			const postsData = postData;
			dispatch(getPostsSuccess(postsData));
			console.log(postData);

		} catch(error) {
			dispatch(getPostsFailure());
		}
    }
  }

// Three actions generated from the slice
export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions

// A selector
export const postsSelector = state => state.posts

// The reducer
export default postsSlice.reducer