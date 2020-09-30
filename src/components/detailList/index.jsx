/**
 * @name 详情列表
 * @author 19114716
 * @time 2020-09-21
 * @example
 * import DetailList from '@/components/detailList'
 * <DetailList />
 */

import React, { memo } from "react";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { AtList, AtListItem } from "taro-ui";
import { playSongs } from "../../actions/player";
import "./index.scss";

const DetailList = memo((props) => {
  const { songs = [], playSongs = () => {} } = props || {};

  function openPlayer(data) {
    playSongs(data);
    Taro.navigateTo({
      url: `/pages/player/index`,
    });
  }

  return (
    <AtList className="container">
      {songs.map((item, index) => (
        <AtListItem
          onClick={() => {
            openPlayer(item);
          }}
          className="list-item"
          key={index}
          title={`${item.name}`}
          note={`${item.ar[0].name}`}
          arrow="right"
          thumb={`${item.al.picUrl}`}
        />
      ))}
    </AtList>
  );
});

export default connect(
  ({}) => ({}),
  (dispatch) => ({
    playSongs(id) {
      dispatch(playSongs(id));
    },
  })
)(DetailList);
