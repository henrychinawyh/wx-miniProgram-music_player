import { combineReducers } from "redux";
import counter from "./counter";
import changeMenuId from "./changeMenu";
import changeNewSong from "./newSong";
import albumDetail from "./albumDetail";

export default combineReducers({
  counter,
  changeMenuId,
  changeNewSong,
  albumDetail,
});
