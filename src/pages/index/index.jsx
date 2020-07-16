/**
 * @name 微信音乐播放器小程序首页-页面组件
 * @author henrychinawyh
 * @time 2020-07-14
 * @description 本页面为小程序的初始页面
 */

import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { View, ScrollView } from "@tarojs/components";
import SwitchMenu from "../../components/switchMenu";
import NewSong from "../../components/newSong";
import LastestSong from "../../components/lastestSong";
import NewAlbum from "../../components/newAlbum";
import SearchMore from "../../components/searchMore";
import Player from "../../components/player";
import { changeSong } from "../../actions/newSong";
import { getRecommendList } from "../../services/index";
import "./index.scss";

@connect(
  ({ counter, changeMenuId }) => ({
    counter,
    changeMenuId,
  }),
  (dispatch) => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    },
    dispatch(cb) {
      dispatch(cb);
    },
  })
)
class Index extends Component {
  state = { isTrigger: false };

  // 执行下拉刷新
  refresh = () => {
    const { dispatch, changeMenuId } = this.props;
    const { menuId = 0 } = changeMenuId || {};

    if (menuId === 0) {
      this.setState(
        {
          isTrigger: true,
        },
        async () => {
          const res = await (getRecommendList() || []);
          this.setState(
            {
              isTrigger: false,
            },
            () => {
              if (Array.isArray(res)) {
                if (res.length) {
                  dispatch(changeSong(res));
                  Taro.showToast({
                    title: "刷新成功",
                    icon: "success",
                    duration: 2000,
                  });
                } else {
                  Taro.showToast({
                    title: "刷新成功",
                    icon: "success",
                    duration: 2000,
                  });
                }
              } else {
                Taro.showToast({
                  title: "刷新失败",
                  icon: "error",
                  duration: 2000,
                });
              }
            }
          );
        }
      );
    }
  };

  // 下拉刷新已完成
  restore = () => {};

  render() {
    const { changeMenuId } = this.props || {};
    const { menuId = 0 } = changeMenuId || {};
    const { isTrigger } = this.state || {};

    return (
      <View className="index">
        {/* 切换菜单 */}
        <View className="switchMenu">
          <SwitchMenu />
        </View>
        {/* 内容详情 */}
        <ScrollView
          className="content"
          scrollY
          scrollWithAnimation={true}
          refresherEnabled={true}
          refresherTriggered={isTrigger}
          refresherThreshold={45}
          onRefresherRefresh={() => this.refresh()}
          onRefresherRestore={() => this.restore()}
        >
          {menuId === 0 && <NewSong />}
          {menuId === 1 && <LastestSong />}
          {menuId === 2 && <NewAlbum />}
          {menuId === 3 && <SearchMore />}
        </ScrollView>
        {/* 底部播放器 */}
        <View className="player">
          <Player />
        </View>
      </View>
    );
  }
}

export default Index;
