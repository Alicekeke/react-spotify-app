import { fromJS } from "immutable";
import {
  CHANGE_ARTIST,
  CHANGE_TRACKS_OF_ARTIST,
  CHANGE_ALBUM_OF_ARTIST,
  CHANGE_ENTER_LOADING
} from "./constants";
import {
  getArtistAboutRequest,
  getArtistAlbumsRequest,
  getArtistTopTracksRequest
} from "../../../api/request";

const changeArtist = data => ({
  type: CHANGE_ARTIST,
  data: fromJS(data)
});
const changeArtistAlbum = data => ({
  type: CHANGE_ALBUM_OF_ARTIST,
  data: fromJS(data)
});
const changeTracks = data => ({
  type: CHANGE_TRACKS_OF_ARTIST,
  data: fromJS(data)
});
export const changeEnterLoading = data => ({
  type: CHANGE_ENTER_LOADING,
  data
});

// 获取歌手个人基本信息
export const getArtistInfo = id => {
  return dispatch => {
    getArtistAboutRequest(id)
      .then(data => {
        dispatch(changeArtist(data));
      })
      .catch(() => {
        console.log("获取歌手基本信息失败");
      });
  };
};

// 获取歌手最跑火单曲
export const getArtistHotTracks = id => {
  return dispatch => {
    getArtistTopTracksRequest(id)
      .then(data => {
        dispatch(changeTracks(data));
        dispatch(changeEnterLoading(false));
      })
      .catch(() => {
        console.log("获取歌手最跑火单曲失败");
      });
  };
};

// 获取歌手所有专辑
export const getArtistAlbums = id => {
  return dispatch => {
    getArtistAlbumsRequest(id)
      .then(data => {
        dispatch(changeArtistAlbum(data));
        dispatch(changeEnterLoading(false));
      })
      .catch(() => {
        console.log("获取歌手专辑信息失败");
      });
  };
};
