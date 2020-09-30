import React, { useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import ListItem from "../listItem";
import { getRecommendList } from "../../services/index";
import { connect } from "react-redux";
import { changeSong } from "../../actions/newSong";
import "./index.scss";

const newSong = ({ changeNewSong, changeSong = () => {} }) => {
  const { songs } = changeNewSong || {};

  // 获取推荐歌单数据
  async function getNewSongData() {
    const res = await getRecommendList();
    // 将推荐歌单信息存储起来
    changeSong(res);
  }

  function navigateToDetail(id, name) {
    Taro.navigateTo({
      url: `/pages/albumDetail/index?albumId=${id}&albumName=${name}`,
    });
  }

  // 初始化推荐歌单的数据
  useEffect(() => {
    getNewSongData();
  }, []);

  return (
    <View className="newSong">
      <ListItem albums={songs} navigateToDetail={navigateToDetail} />

      <View className="footer">———— 已经滑动到最底部了 —————</View>
    </View>
  );
};

export default connect(
  ({ changeNewSong }) => ({ changeNewSong }),
  (dispatch) => ({
    changeSong(songs) {
      dispatch(changeSong(songs));
    },
  })
)(newSong);
