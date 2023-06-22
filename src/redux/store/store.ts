import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices/index.slices";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
