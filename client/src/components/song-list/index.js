import React from "react";
import { SongList, SongItem } from "./style";

const SongsList = React.forwardRef((props, refs) => {
  const { collectCount, showCollect, songs } = props;

  // 歌手页面的点击预览歌曲 在这里要传回歌曲下标并播放
  const selectItem = (e, index, preview_url) => {
    // console.log(index, e, preview_url);

  };

  let songList = list => {
    let res = [];
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      res.push(
        <li key={item.id} onClick={e => selectItem(e, i, item.preview_url)}>
          <div className="info">
            <span>{item.name}</span>
          </div>
          <span className="more_operate iconfont">&#xe690;</span>
        </li>
      );
    }
    return res;
  };

  return (
    <SongList ref={refs} showBackground={props.showBackground}>
      <SongItem>{songList(songs)}</SongItem>
    </SongList>
  );
});

export default React.memo(SongsList);
