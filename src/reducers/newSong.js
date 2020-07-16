import { NEW_SONG } from "../actions/newSong";

const INITIAL_STATE = {
  songs: [],
};

export default function changeNewSongs(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case NEW_SONG:
      return {
        ...state,
        songs: payload,
      };
    default:
      return state;
  }
}
