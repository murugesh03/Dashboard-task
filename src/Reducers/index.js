import contactMethods from "./add";
import contact from "../Data";
import { combineReducers } from "redux";
import { createStore } from "redux";

export const allReducers = () =>
  combineReducers({
    contactMethods: contactMethods,
    contact: contact,
  });

const store = createStore(allReducers);
export default store;
