import { combineReducers } from "@reduxjs/toolkit";

import user from "./user";

//in this file I'll export all the different reducers to create a root reducer for the store
export default combineReducers({
  user,
});
