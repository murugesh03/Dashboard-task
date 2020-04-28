import contactReducer from "./contact";
import { combineReducers } from "redux";

export default combineReducers({
  contact: contactReducer,
});
