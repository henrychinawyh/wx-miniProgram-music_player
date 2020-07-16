// 新歌推荐获取的歌曲列表
export const NEW_SONG = "NEW_SONG";
export const changeSong = (songs) => {
  return {
    type: NEW_SONG,
    payload: songs,
  };
};
