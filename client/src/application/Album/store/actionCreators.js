import { CHANGE_CURRENT_ALBUM, CHANGE_ENTER_LOADING } from "./constants";
import { getAlbumByIdRequest } from "../../../api/request";
import { fromJS } from "immutable";

const changeCurrentAlbum = data => ({
  type: CHANGE_CURRENT_ALBUM,
  data: fromJS(data)
});

export const changeEnterLoading = data => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getAlbumList = id => {
  return dispatch => {
    getAlbumByIdRequest(id)
      .then(res => {
        dispatch(changeCurrentAlbum(res));
        dispatch(changeEnterLoading(false));
      })
      .catch(() => {
        console.log("获取 album 数据失败！");
      });
  };
};
