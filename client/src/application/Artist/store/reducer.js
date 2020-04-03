import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  artistInfo: {},
  artistAlbum: {},
  hotTracksOfArtist: [],
  enterLoading: true
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST:
      return state.set("artistInfo", action.data);
    case actionTypes.CHANGE_TRACKS_OF_ARTIST:
      return state.set("hotTracksOfArtist", action.data);
    case actionTypes.CHANGE_ALBUM_OF_ARTIST:
      return state.set("artistAlbum", action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", action.data);
    default:
      return state;
  }
};
