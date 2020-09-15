import React, { useEffect } from "react";
import Taro from "@tarojs/taro";
import { Button } from "taro-ui";
import { View, Image } from "@tarojs/components";
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
      <View className="recommend">
        <View className="recommend-image">
          <Image
            className="recommend-image-first"
            mode="scaleToFill"
            src={songs[0] && songs[0].picUrl}
          />
        </View>
        <View className="recommend-content">
          <View className="recommend-name">{songs[0] && songs[0].name}</View>
          <View className="recommend-copywriter">
            {songs[0] && songs[0].copywriter}
          </View>

          <View className="recommend-playCount">
            {songs[0] && songs[0].playCount}
          </View>
        </View>
      </View>

      <View className="at-row at-row--wrap other-recommend">
        {songs.map((item, index) => {
          if (!index) {
            return null;
          } else {
            return (
              <View
                key={item.id}
                className="at-col at-col-12 song-item"
                onClick={() => navigateToDetail(item.id, item.name)}
              >
                <View className="song-image">
                  <Image
                    className="song-image-recommend"
                    mode="scaleToFill"
                    src={item && item.picUrl}
                  />
                </View>
                <View className="song-content">
                  <View className="song-title">{item.name}</View>
                  <View className="song-playCount">{item.playCount}</View>
                </View>
              </View>
            );
          }
        })}
      </View>

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
