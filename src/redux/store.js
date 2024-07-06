import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./slice/users";

const reducer = combineReducers({
  // here we will be adding reducers
  users: userReducer,
});
const store = configureStore({
  reducer,
});
export default store;
