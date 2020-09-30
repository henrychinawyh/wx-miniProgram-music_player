import { ALBUM_DETAIL, CURRENT_ALBUM_ID } from "../actions/albumDetail";

const INITIAL_STATE = {
  album: {},
  albumId: undefined,
  songsList: [],
  currentPlaySongId: undefined,
  currentPlaySongInfo: {},
};

export default function changeAlbumDetail(state = INITIAL_STATE, actions) {
  const { payload, type } = actions;

  switch (type) {
    case ALBUM_DETAIL:
      return {
        ...state,
        album: payload,
      };

    case CURRENT_ALBUM_ID:
      return {
        ...state,
        albumId: payload,
      };

    default:
      return state;
  }
}
