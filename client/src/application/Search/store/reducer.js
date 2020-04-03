//reducer.js
import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  songsList: [], // 歌曲列表
  enterLoading: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_RESULT_SONGS_LIST:
      return state.set("songsList", action.data);
    case actionTypes.SET_ENTER_LOADING:
      return state.set("enterLoading", action.data);
    default:
      return state;
  }
};
