/**
 * @name 菜单切换组件
 * @author henrychinawyh
 * @time 2020-07-14
 * @description 用以切换首页的内容项
 */

import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeMenu } from "../../actions/changeMenu";
import "./index.scss";

const tabs = [
  {
    id: 0,
    title: "新歌推荐",
  },
  {
    id: 1,
    title: "最新单曲",
  },
  {
    id: 2,
    title: "新碟上架",
  },
  {
    id: 3,
    title: "搜索更多",
  },
];

const SwitchMenu = (props) => {
  // 选中某个内容项按钮
  const [active, setActive] = useState(undefined);

  // 初始化数据
  useEffect(() => {
    // 初始化menuId
    const { changeMenuId } = props || {};
    const { menuId } = changeMenuId || {};
    setActive(menuId);
  }, []);

  function switchMenu(id) {
    const { changeMenu } = props;
    changeMenu(id);
    setActive(id);
  }

  return (
    <View className="switchMenu">
      {tabs.map((item) => (
        <View
          className={"menuItem" + `${active === item.id ? " active" : ""}`}
          key={item.id}
          onClick={() => switchMenu(item.id)}
        >
          {item.title}
        </View>
      ))}
    </View>
  );
};

SwitchMenu.propTypes = {};

SwitchMenu.defaultProps = {};

export default connect(
  ({ changeMenuId }) => ({ changeMenuId }),
  (dispatch) => ({
    changeMenu(id) {
      dispatch(changeMenu(id));
    },
  })
)(SwitchMenu);
