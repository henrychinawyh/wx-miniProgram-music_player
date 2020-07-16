/**
 * @name 歌单详情页面组件
 * @author henrychinawyh
 * @time 2020-07-15
 */

import React, { Component } from "react";
import { View, Image, ScrollView } from "@tarojs/components";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import "./index.scss";
import { connect } from "react-redux";
import { setCurrentAlbumId, getAlbumDetail } from "../../actions/albumDetail";
import { getAlbumList } from "../../services/index";
import { getDateTimeString, dataFormat } from "../../utils/utils";

import "./index.scss";

@connect(
  ({ albumDetail }) => ({ albumDetail }),
  (dispatch) => ({
    changeAlbumDetail(data) {
      dispatch(changeAlbumDetail(data));
    },
    setCurrentAlbumId(id) {
      dispatch(setCurrentAlbumId(id));
    },
  })
)
class albumDetail extends Component {
  state = {
    albumId: undefined,
    coverImgUrl: "", // 封面图
    createTime: null, // 创建时间
    creator: {}, // 创建者
    name: "",
    playCount: 0,
    description: "",
    tags: [],
    tracks: [], // 音乐列表
  };

  componentWillMount() {
    // 设置当前歌单id
    const params = getCurrentInstance().router.params;
    const { albumName } = params;

    let newTitle = "";
    if (String(albumName).length > 7) {
      newTitle = albumName.replace(albumName.substr(7), "...");
    }

    Taro.setNavigationBarTitle({
      title: newTitle,
    });
  }

  async componentDidMount() {
    const params = getCurrentInstance().router.params;

    const { albumId } = params;
    const { setCurrentAlbumId } = this.props;
    setCurrentAlbumId(albumId);

    const res = await getAlbumList(albumId);

    const {
      coverImgUrl,
      createTime,
      creator,
      name,
      playCount,
      description,
      tags,
      tracks,
    } = res;

    this.setState({
      coverImgUrl,
      createTime,
      creator,
      name,
      playCount,
      description,
      tags,
      tracks,
    });
  }

  componentWillUnmount() {
    setCurrentAlbumId(undefined);
  }

  render() {
    const {
      coverImgUrl,
      createTime,
      creator,
      name,
      playCount,
      description,
      tags,
      tracks,
    } = this.state || {};

    // 对数据做预处理
    // let creatorName = dataFormat(creator.nickname);

    // let newTagStr = "";
    // if (Array.isArray(tags)) {
    //   let newTag = tags;
    //   if (tags.length > 2) {
    //     newTag = newTag.slice(0, 1);
    //     newTagStr = `${tags[0]}、${tags[1]}...`;
    //   } else {
    //     newTagStr = tags.join("、");
    //   }
    // }

    return (
      <View className="album-detail">
        <View className="album-content">
          <View className="album-cover">
            <Image className="cover-image" src={coverImgUrl} mode="widthFix" />
          </View>
          <View className="cover-content">
            <View className="cover-content-title">
              <View className="cover-content-title-name">{name}</View>
              <View className="cover-content-description">{description}</View>
            </View>
          </View>
        </View>
        <View className="albumList">
          {tracks.map((item, index) => {
            const { al, ar } = item || {};
            return (
              <View key={item.id} className="song-item">
                <View className="song-front">
                  <View className="song-index">{index + 1}</View>
                </View>

                <View className="song">
                  <View className="song-name">{item.name}</View>
                  <View className="song-author-name">{ar[0].name}</View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default albumDetail;
