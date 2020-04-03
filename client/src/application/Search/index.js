//src/appliction/Search/index.js
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Bg, SearchBar, ShortcutWrapper } from "./style";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators";
import { changeEnterLoading, getSongsList } from "./store/actionCreators";
// import { List, ListItem, EnterLoading } from './../Artist/style';
import Loading from "./../../baseUI/loading/index";
import Scroll from "../../baseUI/scroll";
import SearchBox from "./../../baseUI/search-box/index";
import { SongItem } from "../Album/style";
import { set } from "immutable";

function Search(props) {
  // 在组件中取出redux中的数据
  const { enterLoading, songsList: immutableSongsList } = props;
  const songsList = immutableSongsList.toJS();

  const { changeEnterLoadingDispatch, getSongsListDispatch } = props;

  // 组件内部
  const [isInputSelected, setShow] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {});
  // 由于是传给子组件的方法，尽量用 useCallback 包裹，以使得在依赖未改变，始终给子组件传递的是相同的引用, 注意在[]里填写依赖
  const handleShowInput = useCallback(() => {
    setShow(!isInputSelected);
    setQuery("");
  }, [isInputSelected]);
  // 点击跳转专辑详情
  const enterAlbumDetail = id => {
    props.history.push(`/album/${id}`);
  };
  const handleQuery = q => {
    setQuery(q);
    if (!q) return;
    changeEnterLoadingDispatch(true);
    getSongsListDispatch(q);
  };

  const selectItem = (e, id) => {
    console.log("选择详情~");
    // getSongDetailDispatch(id);
    // musicNoteRef.current.startAnimation({x:e.nativeEvent.clientX, y:e.nativeEvent.clientY});
  };

  const renderSongs = () => {
    return (
      <SongItem style={{ paddingTop: "20px" }}>
        {songsList.map(item => {
          return (
            <li key={item.id} onClick={e => selectItem(e, item.id)}>
              <div className="info">
                <span>{item.name}</span>
                <span
                  onClick={() => {
                    enterAlbumDetail(item.album.id);
                  }}
                >
                  {item.name}>{item.artists[0].name} · {item.album.name}
                </span>
              </div>
            </li>
          );
        })}
      </SongItem>
    );
  };
  return (
    <div>
      <Bg>
        {/* 1. 点击搜索框，切换到input组件 2. input有内容时，发送ajax请求，显示是搜索结果 3.点击返回，切换到展示组件，下面的搜索结果也清除，loading组价也清除 4.无网或者出错情况，loading到一定时候不显示*/}
        <SearchBar
          onClick={handleShowInput}
          style={
            isInputSelected === false
              ? { display: "block" }
              : { display: "none" }
          }
        >
          搜 索<span className="iconfont camera">&#xe63e;</span>
        </SearchBar>
        <SearchBox
          newQuery={query}
          handleQuery={handleQuery}
          isInputSelected={isInputSelected}
          handleShowInput={handleShowInput}
        ></SearchBox>
        <div
          className="search_noItem"
          style={
            isInputSelected === false
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <span className="iconfont search_Icon">&#xe62f;</span>
          <div className="ad">
            <p className="big">搜索spotify</p>
            <p className="small">寻找你最爱的音乐，影片与podcast节目</p>
          </div>
        </div>
        {/* 下面为搜索结果 */}
        <ShortcutWrapper show={query}>
          <Scroll>
            <div>{renderSongs()}</div>
            <div className="dummy_place"></div>
          </Scroll>
        </ShortcutWrapper>
        {enterLoading ? <Loading></Loading> : null}
      </Bg>
    </div>
  );
}

// 映射redux全局的state到组件的props上
const mapStateToProps = state => ({
  songsList: state.getIn(["search", "songsList"]),
  enterLoading: state.getIn(["search", "enterLoading"])
});

// 映射dispatch到props上
const mapDispatchToProps = dispatch => {
  return {
    changeEnterLoadingDispatch(data) {
      dispatch(changeEnterLoading(data));
    },
    getSongsListDispatch(data) {
      dispatch(getSongsList(data));
    }
  };
};

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search));
