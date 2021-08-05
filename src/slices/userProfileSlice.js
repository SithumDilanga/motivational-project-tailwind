import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postData from '../fakeApiData';

export const getUserProfiles = createAsyncThunk(
  "users/getUserProfiles",
  async (dispatch, getState) => {

    return await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
  }
); 

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    userProfiles: [],
    status: null,
  },
  extraReducers: {
    [getUserProfiles.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUserProfiles.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload;
    },
    [getUserProfiles.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default userProfileSlice.reducer;