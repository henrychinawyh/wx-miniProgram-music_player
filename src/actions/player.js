
// 播放歌曲
export const PLAY_SONGS = "PLAY_SONGS";
export const playSongs = (data) => {
  return {
    type: PLAY_SONGS,
    payload: data,
  };
};
