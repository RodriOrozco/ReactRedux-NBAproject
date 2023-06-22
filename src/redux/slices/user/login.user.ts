import { createSlice } from "@reduxjs/toolkit";
import { EmptyUser } from "../../../core/models";

export const slice = createSlice({
  name: "user",
  initialState: EmptyUser,
  reducers: {
    loginUser: (state, action) => {
      return action.payload;
    },
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    logoutUser: (state, action) => {
      state = EmptyUser;
      return state;
    },
  },
});

export const { loginUser, updateUser, logoutUser } = slice.actions;
export default slice.reducer;
