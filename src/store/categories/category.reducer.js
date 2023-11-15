import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATAGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state = CATAGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATAGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
