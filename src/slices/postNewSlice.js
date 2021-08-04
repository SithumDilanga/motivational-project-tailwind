import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postData from '../fakeApiData';

/*export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (dispatch, getState) => {

    return await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
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