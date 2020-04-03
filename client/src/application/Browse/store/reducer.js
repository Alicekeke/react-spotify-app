import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  Genres: [] //歌的类别
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_GENRES:
      return state.set("genres", action.data);
    default:
      return state;
  }
};
