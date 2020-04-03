//actionCreators.js

import { SET_RESULT_SONGS_LIST, SET_ENTER_LOADING } from "./constants";
import { fromJS } from "immutable";
import { getSearchSpotifyRequest } from "./../../../api/request";

const changeResultSongs = data => ({
  type: SET_RESULT_SONGS_LIST,
  data: fromJS(data)
});

export const changeEnterLoading = data => ({
  type: SET_ENTER_LOADING,
  data: fromJS(data)
});

export const getSongsList = query => {
  return dispatch => {
    getSearchSpotifyRequest(query).then(data => {
      if (!data) return;
      let res = data || [];
      dispatch(changeResultSongs(res));
      dispatch(changeEnterLoading(false)); // 关闭 loading
    });
  };
};
