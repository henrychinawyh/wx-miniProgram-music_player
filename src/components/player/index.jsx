import React from "react";
import { View, Image, Text } from "@tarojs/components";
// import { AtIcon } from "taro-ui";
import "./index.scss";

const Player = (props) => {
  const { imageSrc = "" } = props || {};

  function openMusicList() {}

  return (
    <View className="player">
      {/* 左边头像 */}
      <View className="player-poster">
        <Image
          className="poster"
          src={imageSrc}
          // webp={true}
          mode="scaleToFill"
        />
      </View>

      {/* 右边操作按钮 */}
      <View className="player-opt">
        <Text className={"icon-tem iconfont iconbofang"}>1</Text>
        <Text className={"icon-tem iconfont iconxiayishou"}>2</Text>
        <Text
          className={"icon-tem iconfont iconicon--"}
          onClick={openMusicList}
        >
          3
        </Text>
      </View>
    </View>
  );
};

export default Player;
