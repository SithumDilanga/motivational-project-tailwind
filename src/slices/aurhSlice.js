import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData) => {

		const { email, password, username, confirmPassword } = userData;

    return await axios.post('https://sheltered-meadow-13070.herokuapp.com/api/v1/users/signup', {
      username: `${username}`,
    	name: "SDLive",
    	email : `${email}`,
    	password : `${password}`,
    	passwordConfirm : `${confirmPassword}`
    }).then((response) => response.data)
			.catch((error) => {
				if(error.response) {
					console.log(error.response.data.message);
					return error.response.data;
      		// console.log(error.response.status);
      		// console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log('Error', error.message);
				}
				// console.log(error.config);
			});
  }
); 

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (userData) => {

		const { email, password } = userData;

    return await axios.post('https://sheltered-meadow-13070.herokuapp.com/api/v1/users/login', {
    	email : `${email}`,
    	password : `${password}`,
    }).then((response) => response.data)
			.catch((error) => {
				if(error.response) {
					console.log(error.response.data.message);
					return error.response.data;
      		// console.log(error.response.status);
      		// console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log('Error', error.message);
				}
				// console.log(error.config);
			});
  }
); 

const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
    status: null,
  },
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.status = "loading";
    },
    [signUp.fulfilled]: (state, action) => {
      state.status = "success";
      state.auth = action.payload;
			// console.log(action.payload);
    },
    [signUp.rejected]: (state, action) => {
      state.status = "failed";
    },
		[logIn.pending]: (state, action) => {
      state.status = "loading";
    },
    [logIn.fulfilled]: (state, action) => {
      state.status = "success";
      state.auth = action.payload;
			// console.log(action.payload);
    },
    [logIn.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default authSlice.reducer;