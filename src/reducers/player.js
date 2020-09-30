import { PLAY_SONGS } from "../actions/player";

const INITIAL_STATE = {
  songsList: [],
  currentPlaySongId: undefined,
  currentPlaySongInfo: {},
};

export default function playerInfo(state = INITIAL_STATE, actions) {
  const { payload, type } = actions;

  switch (type) {
    case PLAY_SONGS:
      const { songsList = [] } = state || {};
      const { id } = payload;

      songsList.unshift(id);

      return {
        ...state,
        songsList,
        currentPlaySongId: id,
        currentPlaySongInfo: payload,
      };
    default:
      return state;
  }
}
