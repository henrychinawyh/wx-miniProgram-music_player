/**
 * @name 微信音乐播放器小程序首页-页面组件
 * @author henrychinawyh
 * @time 2020-07-14
 * @description 本页面为小程序的初始页面
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "@tarojs/components";
import SwitchMenu from "../../components/switchMenu";
import NewSong from "../../components/newSong";
import LastestSong from "../../components/lastestSong";
import NewAlbum from "../../components/newAlbum";
import SearchMore from "../../components/searchMore";
import Player from "../../components/player";
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
  })
)
class Index extends Component {
  config = {
    navigationBarTitleText: "米拉音乐",
  };

  state = {
    setRefreshStatus: false,
  };

  // 执行下拉刷新
  refresh = () => {};

  // 下拉刷新已完成
  restore = () => {};

  render() {
    const { changeMenuId } = this.props || {};
    const { menuId = 0 } = changeMenuId || {};
    const { setRefreshStatus } = this.state || {};

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
          refresherThreshold={45}
          refresherTriggered={setRefreshStatus}
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
