import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postData from '../fakeApiData';
import axios from "axios";

/*export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (dispatch, getState) => {

    // return await fetch("https://enigmatic-shore-01544.herokuapp.com/api/v1/posts").then(
    //   (res) => res.json()['data'].posts
    // );

    return await fetch('https://enigmatic-shore-01544.herokuapp.com/api/v1/posts').then(function(response){
      return response.json();
    }
    ).then(function(details){
      console.log(details['data'].posts)
      return details['data'].posts;
    });

    // return await axios.get('https://enigmatic-shore-01544.herokuapp.com/api/v1/posts').then((response) => response);
  }
); */

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (dispatch, getState) => {

		const postsData = postData;

    return await postData;
  }
);

const postsSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default postsSlice.reducer;