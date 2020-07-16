// 指定当前歌单的id
export const CURRENT_ALBUM_ID = "CURRENT_ALBUM_ID";
export const setCurrentAlbumId = (albumId) => {
  return {
    type: CURRENT_ALBUM_ID,
    payload: albumId,
  };
};

// 获取歌单列表数据
export const ALBUM_DETAIL = "ALBUM_DETAIL";
export const getAlbumDetail = (data) => {
  return {
    type: ALBUM_DETAIL,
    payload: data,
  };
};
