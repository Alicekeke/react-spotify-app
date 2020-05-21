import React, { useState, useEffect, useRef, useCallback } from "react";
import { getAlbumList, changeEnterLoading } from "./store/actionCreators";
import { Container, SongItem, SongList, TopDesc } from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import Header from "./../../baseUI/header/index";
import Scroll from "../../baseUI/scroll/index";
import Loading from "../../baseUI/loading/index";
import { isEmptyObject } from "./../../api/utils";
import style from "../../assets/global-style";
// import LazyLoad from "react-lazyload";

export const HEADER_HEIGHT = 45;

function Album(props) {
  const [showStatus, setShowStatus] = useState(true);
  const [title, setTitle] = useState("歌单");
  const headerEl = useRef();
  const handleScroll = useCallback(pos => {
    let minScrollY = -HEADER_HEIGHT;
    let percent = Math.abs(pos.y / minScrollY);
    let headerDom = headerEl.current;
    //滑过顶部的高度开始变化
    if (pos.y < minScrollY) {
      headerDom.style.backgroundColor = style["theme-color"];
      headerDom.style.opacity = Math.min(1, (percent - 1) / 2);
      headerDom.style.backgroundColor = "";
      headerDom.style.opacity = 1;
    }
  }, []);
  // 从路由中拿到歌单的 id
  const id = props.match.params.id;

  const { currentAlbum: currentAlbumImmutable, enterLoading } = props;
  const { getAlbumDataDispatch } = props;
  useEffect(() => {
    getAlbumDataDispatch(id);
  }, [getAlbumDataDispatch, id]);
  let currentAlbum = currentAlbumImmutable.toJS();

  //   用useCallback包裹，在依赖没有变化的情况下保持一样的函数引用，节省性能
  const handleBack = useCallback(() => {
    console.log("我点击回去了");
    setShowStatus(false);
    props.history.goBack();
  }, []);

  // 专辑列表的点击单曲播放 - 还没写😅
  const selectItem = (e, id, preview_url) => {
    console.log(e, id, preview_url);
  };
  //   封装组件代码
  const renderTopDesc = () => {
    return (
      <TopDesc background={currentAlbum.images[1].url}>
        <div className="background">
          <div className="filter"></div>
        </div>
        <div className="img_wrapper">
          <div className="decorate"></div>
          <img src={currentAlbum.images[1].url} alt="" />
        </div>
        <div className="desc_title">
          <h2>{currentAlbum.name}</h2>
          <span>专辑来自{currentAlbum.artists[0].name}</span>
        </div>
      </TopDesc>
    );
  };

  const renderSongList = () => {
    return (
      <SongList>
        <div className="func">
          {/* <div className="add_list">
             <p > 存储</p>
           </div> */}
          <div className="play_random">
            <p> 随机播放</p>
          </div>
        </div>
        <SongItem>
          {currentAlbum.tracks.items.map((item, index) => {
            return (
              <li key={item.id} onClick={e => selectItem(e, item.id, item.preview_url)}>
                <div className="info">
                  <span>{item.name}</span>
                  <span>{item.artists[0].name}</span>
                </div>
                <span className="more_operate iconfont">&#xe690;</span>
              </li>
            );
          })}
        </SongItem>
        <div className="dummy_place"></div>
      </SongList>
    );
  };

  return (
    <CSSTransition
      // in表示是否出现， timeout表示动画延时，className是钩子名，
      // unmountOnExit表示元素隐藏则相应的dom移除
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={props.history.goBack}
    >
      <Container>
        <Header ref={headerEl} handleClick={handleBack}></Header>
        {!isEmptyObject(currentAlbum) ? (
          <Scroll bounceTop={false} onScroll={handleScroll}>
            <div>
              {renderTopDesc()}
              {renderSongList()}
            </div>
          </Scroll>
        ) : null}
        {enterLoading ? <Loading></Loading> : null}
      </Container>
    </CSSTransition>
  );
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = state => ({
  currentAlbum: state.getIn(["album", "currentAlbum"]),
  enterLoading: state.getIn(["album", "enterLoading"])
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = dispatch => {
  return {
    getAlbumDataDispatch(id) {
      dispatch(changeEnterLoading(true));
      dispatch(getAlbumList(id));
    }
  };
};

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Album));
