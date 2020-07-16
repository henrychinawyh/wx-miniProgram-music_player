import api from "../utils/request";

// 获取新歌推荐列表数据
export function getRecommendList() {
  return api.get({
    url: "/personalized",
  });
}

// 获取音乐专辑列表
export function getAlbumList(id) {
  return api.get({
    url: `/playlist/detail?id=${id}`,
  });
}

// 获取音乐Url
export function getSongUrl(id) {
  return api.get({
    url: `/song/url?id=${id}`,
  });
}
