import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import { getRecommendList } from "../../services/index";

import "./index.scss";

const newSong = (props) => {
  useEffect(() => {
    const res = getRecommendList();
  }, []);

  return <View className="newSong"></View>;
};

export default newSong;
