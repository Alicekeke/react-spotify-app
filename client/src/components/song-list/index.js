import React from "react";
import { SongList, SongItem } from "./style";

const SongsList = React.forwardRef((props, refs) => {
  const { collectCount, showCollect, songs } = props;

  const selectItem = (e, index) => {
    console.log(index);
  };

  let songList = list => {
    let res = [];
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      res.push(
        <li key={item.id} onClick={e => selectItem(e, i)}>
          <div className="info">
            <span>{item.name}</span>
            {/* <span>
              { item.name}
            </span> */}
          </div>
          <span className="more_operate iconfont">&#xe690;</span>
        </li>
      );
    }
    return res;
  };

  const collect = count => {
    return (
      <div className="add_list">
        <i className="iconfont">&#xe62d;</i>
        <span> 收藏 ({Math.floor(count / 1000) / 10} 万)</span>
      </div>
    );
  };
  return (
    <SongList ref={refs} showBackground={props.showBackground}>
      <SongItem>{songList(songs)}</SongItem>
    </SongList>
  );
});

export default React.memo(SongsList);
