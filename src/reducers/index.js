import { combineReducers } from "redux";
import counter from "./counter";
import changeMenuId from "./changeMenu";

export default combineReducers({
  counter,
  changeMenuId,
});
