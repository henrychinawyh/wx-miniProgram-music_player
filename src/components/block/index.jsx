/**
 * @name 间距格式化组件
 * @author Henry
 * @time 2020-09-22
 * @param {Object | String} children 传入的组件或者是文字
 * @param {String} justifyContent flex主轴样式
 * @param {Number} varticalMargin flex-direction:columns 各模块之间的上下间距
 * @param {Number} horizontalMargin flex-direction默认时，各模块之间的水平间距
 * @param {Object} itemStyle 组件中各个模块的通用样式
 * @param {String} type 方向
 * @param {String} alignitems 侧轴的排列样式
 * @param {String} className 组件自身样式
 * @param {Object} rest 其他样式
 * @example
 * import Block from '@/components/block'
 * <Block>
 *    {children}
 * </Block>
 */

import React, { memo } from "react";
import { View } from "@tarojs/components";
import "./index.scss";

const Block = memo(
  ({
    children,
    justifyContent,
    varticalMargin = 30,
    // eslint-disable-next-line no-unused-vars
    horizontalMargin = 20,
    itemStyle = {},
    type = "vertical",
    alignitems = "center",
    className,
    ...rest
  }) => {
    if (children && children.map) {
      if (type === "horizontal") {
        return (
          <View
            className={`${className} __blockArea __${justifyContent} __alignItems${alignitems}`}
            {...rest}
          >
            {(children || []).map((item, index) => {
              if (item === null) {
                return null;
              }

              return (
                <View
                  key={index}
                  style={{ marginLeft: horizontalMargin, ...itemStyle }}
                  className="blockItem"
                >
                  {item}
                </View>
              );
            })}
          </View>
        );
      } else {
        return (
          <View className={className} {...rest}>
            {(children || []).map((item, index) => {
              if (item === null) {
                return null;
              } else {
                return (
                  <View
                    key={index}
                    style={{ marginTop: index ? varticalMargin : 0 }}
                  >
                    {item}
                  </View>
                );
              }
            })}
          </View>
        );
      }
    } else {
      return children;
    }
  }
);

export default Block;
