import { combineReducers } from "redux";
import counter from "./counter";
import changeMenuId from "./changeMenu";
import changeNewSong from "./newSong";
import albumDetail from "./albumDetail";
import playerInfo from "./player";

export default combineReducers({
  counter,
  changeMenuId,
  changeNewSong,
  albumDetail,
  playerInfo,
});
