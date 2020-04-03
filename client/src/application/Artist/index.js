import React, { useState, useEffect, useRef, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import {
  Container,
  ImgWrapper,
  CollectButton,
  SongListWrapper,
  BgLayer
} from "./style";
import SongsList from "../../components/song-list";
import BrowseItem from "../../components/browseItem";
import Scroll from "../../baseUI/scroll/index";
import Header from "../../baseUI/header";
import { connect } from "react-redux";
import {
  getArtistInfo,
  changeEnterLoading,
  getArtistHotTracks,
  getArtistAlbums
} from "./store/actionCreators";

function Artist(props) {
  const [showStatus, setShowStatus] = useState(true);
  const {
    artistInfo: artistInfoImmutable,
    hotTracksOfArtist: hotTracksOfArtistImmutable,
    artistAlbum: artistAlbumImmutable,
    enterLoading
  } = props;
  const {
    getArtistInfoDispatch,
    getArtistHotTracksDispatch,
    getArtistAlbumsDispatch
  } = props;

  // ---------UI逻辑----------------------------
  const collectButton = useRef();
  const imageWrapper = useRef();
  const songScrollWrapper = useRef();
  const songScroll = useRef();
  const header = useRef();
  const layer = useRef();
  // 图片初始高度
  const initialHeight = useRef(0);
  // 往上偏移的尺寸，露出圆角
  const OFFSET = 5;
  const HEADER_HEIGHT = 30;

  //路由中拿到歌单的id
  const id = props.match.params.id;

  useEffect(() => {
    // 有了id，请求数据
    getArtistInfoDispatch(id);
    getArtistHotTracksDispatch(id);
    getArtistAlbumsDispatch(id);
    // 处理页面UI逻辑
    let h = imageWrapper.current.offsetHeight;
    initialHeight.current = h;
    songScrollWrapper.current.style.top = `${h - OFFSET}px`;
    // 把遮罩先放在下面，以裹住歌曲列表
    layer.current.style.top = `${h - OFFSET}px`;
    songScroll.current.refresh();
    // eslint-disable-next-line
  }, [id]);
  let artistInfo = artistInfoImmutable.toJS();
  let hotTracksOfArtist = hotTracksOfArtistImmutable.toJS();
  let artistAlbum = artistAlbumImmutable.toJS();
  // console.log( Object.prototype.toString.call(artistAlbum) )

  // 处理歌单滑动
  const handleScroll = useCallback(pos => {
    let height = initialHeight.current;
    const newY = pos.y;
    const imageDOM = imageWrapper.current;
    const buttonDOM = collectButton.current;
    const headerDOM = header.current;
    const layerDOM = layer.current;
    const minScrollY = -(height - OFFSET) + HEADER_HEIGHT;

    //指的是滑动距离占图片高度的百分比
    const percent = Math.abs(newY / height);

    if (newY > 0) {
      buttonDOM.style["transform"] = `translate3d(0, ${newY}px, 0)`;
      layerDOM.style.top = `${height - OFFSET + newY}px`;
    } else if (newY >= minScrollY) {
      layerDOM.style.top = `${height - OFFSET - Math.abs(newY)}px`;
      //这时候保证遮罩的层叠优先级比图片高，不至于被图片挡住
      layerDOM.style.zIndex = 1;

      //按钮跟着移动且渐渐变透明
      buttonDOM.style["transform"] = `translate3d(0, ${newY}px, 0)`;

      headerDOM.style["opacity"] = `${1 - percent * 2}`;
      buttonDOM.style["opacity"] = `${1 - percent * 2}`;
    } else if (newY < minScrollY) {
      //往上滑动，但是超过Header部分
      layerDOM.style.top = `${HEADER_HEIGHT - OFFSET}px`;
      layerDOM.style.zIndex = 1;
      //防止溢出的歌单内容遮住Header
      headerDOM.style.zIndex = 100;
    }
  }, []);

  const setShowStatusFalse = useCallback(() => {
    setShowStatus(false);
  }, []);
  let imageUrl;
  const images = artistInfo.images;
  for (let i in images) {
    if ((i = 2)) {
      imageUrl = images[i].url;
      // 为什么artistInfo.image[2].url拿不到值 好气哦
    }
  }
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <Container>
        <Header
          handleClick={setShowStatusFalse}
          title={artistInfo.name}
          ref={header}
        ></Header>
        <ImgWrapper ref={imageWrapper} bgUrl={imageUrl}>
          <div className="img_wrapper"></div>
          {/* <span className="followers_count">{artistInfo}</span> */}
          <div className="filter"></div>
        </ImgWrapper>
        <CollectButton ref={collectButton}>
          <span className="text"> 播放 </span>
        </CollectButton>
        <BgLayer ref={layer}></BgLayer>

        <SongListWrapper ref={songScrollWrapper}>
          <Scroll ref={songScroll} onScroll={handleScroll}>
            <div>
              <SongsList songs={hotTracksOfArtist}></SongsList>
              <h2>专辑</h2>
              <BrowseItem artistAlbum={artistAlbum}></BrowseItem>
            </div>
          </Scroll>
        </SongListWrapper>
      </Container>
    </CSSTransition>
  );
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = state => ({
  artistInfo: state.getIn(["artist", "artistInfo"]),
  hotTracksOfArtist: state.getIn(["artist", "hotTracksOfArtist"]),
  artistAlbum: state.getIn(["artist", "artistAlbum"]),
  enterLoading: state.getIn(["artist", "enterLoading"])
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = dispatch => {
  return {
    getArtistInfoDispatch(id) {
      dispatch(getArtistInfo(id));
      dispatch(changeEnterLoading(true));
    },
    getArtistHotTracksDispatch(id) {
      dispatch(changeEnterLoading(true));
      dispatch(getArtistHotTracks(id));
    },
    getArtistAlbumsDispatch(id) {
      dispatch(getArtistAlbums(id));
      dispatch(changeEnterLoading(true));
    }
  };
};

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Artist));
