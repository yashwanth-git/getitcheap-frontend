import { combineReducers } from "redux";
import items from "./items";
import details from "./details";

const reducers = combineReducers({
  items,
  details,
});

export default reducers;
