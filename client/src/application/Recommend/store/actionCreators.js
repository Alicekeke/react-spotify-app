// 放不同action
// actionCreators.js
import * as actionTypes from "./constants";
import { fromJS } from "immutable"; // 将 JS 对象转换成 immutable 对象
// 这里按需映入封装好的请求
import {
  getFeaturedListsRequest,
  getMyRecentlyPlayedTracksRequest,
  getMyTopArtistsRequest,
  getNewReleasesRequest,
  getTopTracksRequest
} from "../../../api/request";

export const changeEnterLoading = data => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

export const changeFeaturedLists = data => ({
  type: actionTypes.CHANGE_FEATUREDLISTS, //对action的描述
  data: fromJS(data) //要改变的值
});

export const changeRecentlyPlayedList = data => ({
  type: actionTypes.CHANGE_RECENTLYPLAYED_LIST,
  data: fromJS(data)
});

export const changeTopArtists = data => ({
  type: actionTypes.CHANGE_TOP_ARTISTS,
  data: fromJS(data)
});

export const changeNewReleases = data => ({
  type: actionTypes.CHANGE_NEW_RELEASES,
  data: fromJS(data)
});

export const changeTopTracks = data => ({
  type: actionTypes.CHANGE_MY_TOP_TRACKS,
  data: fromJS(data)
});

//获取推荐列表
export const getFeaturedLists = () => {
  return dispatch => {
    getFeaturedListsRequest()
      .then(data => {
        dispatch(changeFeaturedLists(data));
        dispatch(changeEnterLoading(false));
      })
      .catch(() => {
        console.log("为你推荐精选传输错误");
      });
  };
};

// 获取最近播放列表
export const getMyRecentlyPlayedTracks = () => {
  return dispatch => {
    getMyRecentlyPlayedTracksRequest()
      .then(data => {
        dispatch(changeRecentlyPlayedList(data));
      })
      .catch(() => {
        console.log("推荐歌单数据传输错误");
      });
  };
};

// 获取我最爱的歌手
export const getMyTopArtists = () => {
  return dispatch => {
    getMyTopArtistsRequest()
      .then(data => {
        dispatch(changeTopArtists(data));
      })
      .catch(() => {
        console.log("最爱歌手数据传输错误");
      });
  };
};

//获取最新发行歌曲
export const getNewReleases = () => {
  return dispatch => {
    getNewReleasesRequest()
      .then(data => {
        dispatch(changeNewReleases(data));
      })
      .catch(() => {
        console.log("最新发行专辑传输错误");
      });
  };
};
// 获取我最爱的歌曲
export const getMyTopTracks = () => {
  return dispatch => {
    getTopTracksRequest()
      .then(data => {
        dispatch(changeTopTracks(data));
      })
      .catch(() => {
        console.log("我的最爱歌曲数据传输错误");
      });
  };
};
