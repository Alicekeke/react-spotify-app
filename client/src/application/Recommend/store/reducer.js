// 存放initialState 和 reducer函数
// 初始化state在reducer中运行

import * as actionTypes from "./constants";
import { fromJS } from "immutable"; //// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

const defaultState = fromJS({
  enterLoading: true,
  featuredLists: [], //推荐列表
  recentlyPlayedTracks: [], //最近播放
  myTopArtists: [], //最爱的歌手
  newReleases: [], //新发行的歌曲
  topTracks: [] //我最爱的歌曲
});

// 导出状态  由于存放的是 immutable 数据结构，
// 所以必须用 set 方法来设置新状态，同时取状态用 get 方法

export default (state = defaultState, action) => {
  //两个参数，旧状态，当前传入的action
  switch (action.type) {
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", action.data);
    case actionTypes.CHANGE_FEATUREDLISTS:
      return state.set("featuredLists", action.data);
    case actionTypes.CHANGE_RECENTLYPLAYED_LIST:
      return state.set("recentlyPlayedTracks", action.data);
    case actionTypes.CHANGE_TOP_ARTISTS:
      return state.set("myTopArtists", action.data);
    case actionTypes.CHANGE_NEW_RELEASES:
      return state.set("newReleases", action.data);
    case actionTypes.CHANGE_MY_TOP_TRACKS:
      return state.set("topTracks", action.data);
    default:
      return state;
  }
};
