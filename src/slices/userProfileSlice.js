import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postData from '../fakeApiData';

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (dispatch, getState) => {

    return await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
  }
); 

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default usersSlice.reducer;