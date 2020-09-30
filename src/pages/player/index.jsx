import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { View, Image, Text, Audio } from "@tarojs/components";
import Block from "../../components/block";
import IconFont from "../../components/iconfont";

import { getSongUrl } from "../../services/index";

import "./index.scss";

class Player extends Component {
  state = {
    currentUrl: undefined,
    autoplay: false,
    loop: false,
    songName: "",
    picUrl: "",
    name: "",
  };

  config = {
    navigationBarBackgroundColor: "#4C4C4C",
    navigationBarTextStyle: "white",
    enablePullDownRefresh: false,
  };

  componentDidMount() {
    try {
      const { playerInfo } = this.props || {};

      console.log(playerInfo, "+++++++_____");

      const { currentPlaySongId, currentPlaySongInfo } = playerInfo || {};

      const { al, ar, name: songName } = currentPlaySongInfo;
      const { picUrl } = al || {};
      const { name } = ar[0] || {};

      console.log(currentPlaySongId);

      // getSongUrl(getSongUrl).then((res) => {
      //   console.log(res, "音乐url");
      // });
      this.setState({
        currentUrl: `https://music.163.com/song/media/outer/url?id=${currentPlaySongId}.mp3`,
        autoplay: true,
        songName,
        picUrl,
        name,
      });

      // 请求播放歌曲的详情信息

      Taro.setNavigationBarTitle({
        title: songName,
      });
    } catch {}
  }

  openMusicList = () => {};

  render() {
    const { autoplay, loop } = this.props || {};
    const { currentUrl, picUrl, name } = this.state;
    return (
      <View className="player">
        {/* 歌曲信息 */}
        <View className="player-info">
          <Block varticalMargin={10}>
            {/* 作者 */}
            <Text className="author">{name}</Text>
          </Block>
        </View>

        {/* 播放海报 */}
        <View className="player-poster">
          <Image
            className="poster"
            src={picUrl}
            // webp={true}
            mode="scaleToFill"
          />
        </View>

        {/* 操作按钮 */}
        <View className="player-opt">
          <Block type="horizontal">
            <IconFont name="play" size={52} />
            <IconFont name="xiayiqu" size={52} />
            <IconFont name="gengduo-2" size={52} />
          </Block>
        </View>

        <Audio
          src={currentUrl}
          controls={false}
          autoplay={autoplay}
          loop={loop}
          initialTime="30"
          id="audio"
        />
      </View>
    );
  }
}

export default connect(({ playerInfo }) => ({
  playerInfo,
}))(Player);
