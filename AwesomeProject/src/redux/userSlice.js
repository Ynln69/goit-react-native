import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  addUserPost,
  addCommentToPost,
} from "./operations";

const initialState = {
  user: { name: null, email: null, password: null },
  uid: null,
  posts: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
        state.user = payload.user;
        state.uid = payload.uid;
      })
      .addCase(register.rejected, () => {})
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
        state.user = payload.user;
        state.uid = payload.uid;
      })
      .addCase(logIn.rejected, () => {})
      .addCase(logOut.fulfilled, (state) => {
        state = initialState;
      })
      .addCase(logOut.rejected, () => {})
      .addCase(addUserPost.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(addUserPost.rejected, () => {})
      .addCase(addCommentToPost.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(addCommentToPost.rejected, () => {});
  },
});
