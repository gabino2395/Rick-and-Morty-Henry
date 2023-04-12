import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {};
    case REMOVE_FAV:
      return {};

    default:
      return { ...state };
  }
};
export default rootReducer;
