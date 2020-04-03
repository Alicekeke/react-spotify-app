import React from "react";
import { ItemWrapper, Item } from "./style";
import { withRouter } from "react-router";
import list from "../list";
// import Scroll from '../../baseUI/scroll'

function BrowseItem(props) {
  const { genres, artistAlbum } = props;
  const enterGenresDetail = id => {
    props.history.push(`/browse/${id}`);
  };
  const enterAlbumDetail = id => {
    props.history.push(`/album/${id}`);
  };

  let res = [];
  let genresItem = genres => {
    for (let i in genres) {
      let item = genres[i];
      res.push(
        <Item key={item.id} onClick={() => enterGenresDetail(item.id)}>
          <img src={item.icons[0].url}></img>
          <p>{item.name}</p>
        </Item>
      );
    }
    return res;
  };

  let artistAlbumItem = artistAlbum => {
    for (let i in artistAlbum) {
      let item = artistAlbum[i];
      res.push(
        <Item key={item.id} onClick={() => enterAlbumDetail(item.id)}>
          <img src={item.images[2].url}></img>
          <p>{item.name}</p>
        </Item>
      );
    }
    return res;
  };

  return (
    <ItemWrapper key={props.location.pathname}>
      {genres ? genresItem(genres) : artistAlbumItem(artistAlbum)}
      <div className="dummy_place"></div>
    </ItemWrapper>
  );
}

export default React.memo(withRouter(BrowseItem));
