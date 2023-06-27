import { createSlice } from "@reduxjs/toolkit";
import { EmptyUser } from "../../../core/models";
import {
  clearLocalStorage,
  persistLocalStorage,
} from "../../../utils/local-storage.utils";
import { User } from "../../../core/interfaces";

export const userKey = "userKey";

export const slice = createSlice({
  name: "user",
  initialState: localStorage.getItem(userKey)
    ? JSON.parse(localStorage.getItem(userKey) as string)
    : EmptyUser,
  reducers: {
    loginUser: (state, action) => {
      persistLocalStorage<User>(userKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<User>(userKey, result);
      return result;
    },
    logoutUser: (state, action) => {
      clearLocalStorage(userKey);
      return EmptyUser;
    },
  },
});

export const { loginUser, updateUser, logoutUser } = slice.actions;
export default slice.reducer;
