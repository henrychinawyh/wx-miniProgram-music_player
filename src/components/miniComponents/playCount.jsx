/**
 * @name 播放量展示组件
 * @author Henry
 * @time 2020-09-22
 */

import React, { memo } from "react";
import { View, Image, Text } from "@tarojs/components";
import Block from "../block";
import IconFont from "../iconfont";
import { formatNumber } from "../../utils/utils";
import "./index.scss";

const PlayCount = memo((props) => {
  const { item, mode = "widthFix" } = props;

  return (
    <View className="card-img">
      <Image className="card-image" mode={mode} src={item && item.picUrl} />

      <Block
        type="horizontal"
        className="card-play-count"
        itemStyle={{
          marginLeft: 10,
        }}
      >
        <IconFont name="V" color="#efefef" size={24} />
        <Text>{formatNumber(item.playCount)}</Text>
      </Block>
    </View>
  );
});

export default PlayCount;
