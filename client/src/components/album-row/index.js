import React from "react";
// import dayjs from "dayjs";
import { Row } from "./style";

function AlbumRow(props) {
  return (
    <Row>
      <div className="artists">
        {props.recentlyPlayedTracks.map((item, index) => {
          return (
            <div key={index} className="rowItem">
              <div className="image">
                <img
                  src={item.album ? item.album.images[1].url : item.images[1].url }
                />
              </div>
              <div className="desc">
                <p>{item.name}</p>
                <p className="artist">
                  {item.album.album_type === "album" ? "专辑" : "歌曲"} 来自 ：
                  {item.artists[0].name}
                </p>
                {/* <span className="iconfont dot">&#xe690;</span> */}
              </div>
              <div className="more_operate">
                <span className="iconfont">&#xe690;</span>
              </div>
            </div>
          );
        })}
      </div>
    </Row>
  );
}

export default React.memo(AlbumRow);
