import { useGlobalIconFont } from "./components/iconfont/helper";
export default {
  usingComponents: Object.assign(useGlobalIconFont()),
  pages: [
    "pages/index/index",
    "pages/albumDetail/index",
    "pages/artistList/index",
    "pages/player/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "米拉音乐",
    navigationBarTextStyle: "black",
  },
};
