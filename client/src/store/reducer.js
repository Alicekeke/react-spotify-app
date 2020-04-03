//全局reducer.js
import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store/index';
import { reducer as browseReducer } from '../application/Browse/store/index';
import { reducer as searchReducer } from "../application/Search/store/index";
import { reducer as albumReducer } from '../application/Album/store/index';
import { reducer as artistReducer } from "../application/Artist/store/index";

export default combineReducers ({
  recommend: recommendReducer,
  browse: browseReducer,
  search: searchReducer,
  album: albumReducer,
  artist: artistReducer,
});