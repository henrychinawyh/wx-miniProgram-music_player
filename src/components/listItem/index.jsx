/**
 * @name 音乐列表
 * @author Henry
 * @time 2020-09-21
 */

import React, { memo } from "react";
import { View, Text } from "@tarojs/components";
import { PlayCount } from "../miniComponents";

import "./index.scss";

const ListItem = memo((props) => {
  const { albums = [], navigateToDetail = () => {}, ...rest } = props || {};

  return (
    <View className="at-row at-row--wrap container">
      {albums.map((item) => {
        return (
          <View
            className="at-col at-col-6 card-container"
            key={item.id}
            onClick={() => navigateToDetail(item.id, item.name)}
            {...rest}
          >
            <PlayCount item={item} />
            <Text className="card-content">{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
});

export default ListItem;
