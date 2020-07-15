import React, { Component } from "react";
import { Provider } from "react-redux";

import configStore from "./store";
import 'taro-ui/dist/style/index.scss'
import "./app.scss";

const store = configStore();

class App extends Component {
  config = {
    pages: [
      "pages/index/index",
      "pages/albumDetail/index",
      "pages/artistList/index",
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "TaroMusic",
      navigationBarTextStyle: "black",
      enablePullDownRefresh: true,
    },
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
