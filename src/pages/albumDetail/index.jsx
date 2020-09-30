/**
 * @name 歌单详情页面组件
 * @author henrychinawyh
 * @time 2020-07-15
 */

import React, { Component } from "react";
import { View, Image, Text } from "@tarojs/components";
import Taro, { getCurrentInstance } from "@tarojs/taro";

import { AtButton } from "taro-ui";
import IconFont from "../../components/iconfont";
import { connect } from "react-redux";
import DetailList from "../../components/detailList";
import { PlayCount } from "../../components/miniComponents";
import { setCurrentAlbumId } from "../../actions/albumDetail";

import { getAlbumList } from "../../services/index";

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
class AlbumDetail extends Component {
  state = {
    albumId: undefined,
    backgroundCoverUrl: "", // 封面图
    createTime: null, // 创建时间
    creator: {}, // 创建者
    name: "",
    playCount: 0,
    description: "",
    tags: [],
    tracks: [], // 音乐列表
    album: {},
  };

  componentWillMount() {
    // 设置当前歌单id
    const params = getCurrentInstance().router.params;
    const { albumName } = params;

    let newTitle = "";
    if (String(albumName).length > 7) {
      newTitle = (albumName || "").replace(albumName.substr(7), "...");
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

    const album = {
      picUrl: coverImgUrl,
      playCount,
    };

    this.setState({
      coverImgUrl,

      createTime,
      creator,
      name,
      playCount,
      description,
      tags,
      tracks,
      album,
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
      album,
    } = this.state || {};

    return (
      <View className="album-detail">
        <View className="album-content">
          <View className="album-cover">
            <Image className="cover-image" src={coverImgUrl} mode="widthFix" />
            <View className="cover-mask"></View>
            <View className="album-info">
              <View className="at-row">
                <View className="at-col at-col-4">
                  <PlayCount item={album} mode="widthFix" />
                </View>
                <View className="at-col at-col-7 at-col__offset-1 cover-content">
                  <Text className="cover-title-name">{name}</Text>
                  <View className="content">
                    <Text className="cover-content-description">
                      {description.length > 30
                        ? `${description.substring(0, 30)}...`
                        : description}
                    </Text>
                    {description.length > 30 ? (
                      <Text className="cover-content-more">更多</Text>
                    ) : null}
                  </View>
                </View>
              </View>
            </View>
            <View className="ablum-operator">
              <AtButton type="primary" size="small">
                <View className="album-icon">
                  <IconFont name="bofang_huaban" size={32} color="#eaeaea" />
                  <Text className="btn-icon icon1">播放全部</Text>
                </View>
              </AtButton>
              <AtButton size="small">
                <View className="album-icon">
                  <IconFont name="fenxiang3" size={32} color="#eaeaea" />
                  <Text className="btn-icon icon2">分享专辑</Text>
                </View>
              </AtButton>
            </View>
          </View>
        </View>
        <DetailList songs={tracks} />
      </View>
    );
  }
}

export default AlbumDetail;
