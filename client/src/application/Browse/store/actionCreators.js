// 放不同的action

import * as actionTypes from "./constants";
import { fromJS } from "immutable";

import { getGenresRequest } from "../../../api/request";

export const changeGenres = data => ({
  type: actionTypes.CHANGE_GENRES,
  data: fromJS(data)
});

export const getGenres = () => {
  return dispath => {
    getGenresRequest()
      .then(data => {
        dispath(changeGenres(data));
      })
      .catch(() => {
        console.log("类别数据传输错误");
      });
  };
};
