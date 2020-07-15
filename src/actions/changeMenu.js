// 修改首页内容切换状态
export const CHANGE_MENU = "CHANGE_MENU";
export const changeMenu = (menuId) => {
  return {
    type: CHANGE_MENU,
    menuId,
  };
};
