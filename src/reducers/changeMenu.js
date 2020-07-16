import { CHANGE_MENU } from "../actions/changeMenu";

const INITIAL_STATE = {
  menuId: 0,
};

export default function changeMenuId(state = INITIAL_STATE, actions) {
  const { menuId, type } = actions;

  switch (type) {
    case CHANGE_MENU:
      return {
        ...state,
        menuId,
      };

    default:
      return state;
  }
}
