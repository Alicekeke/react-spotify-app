import React, { useEffect } from "react";
import Scroll from "../../baseUI/scroll/index";
// 路由渲染
import { renderRoutes } from "react-router-config";
import RecommendList from "../../components/list";
import RecommendRecentList from "../../components/recentList";
import baseUI from "../../baseUI/loading/index";
// redux中数据
import * as actionTypes from "./store/actionCreators";
// 引入 懒加载forceCheck 方法
import { forceCheck } from "react-lazyload";
import { connect } from "react-redux";
import { Content } from "./style";
import { HorContent } from "./style";

import Title from "../../components/title";
import Loading from "../../baseUI/loading/index";

//mock 数据

function Recommend(props) {
  const {
    recentlyPlayedTracks,
    featuredLists,
    myTopArtists,
    newReleases,
    topTracks,
    enterLoading
  } = props;

  const {
    getFeaturedListsDispatch,
    getRecentlyPlayedTracksDispatch,
    getMyTopArtistsDispatch,
    getNewReleasesDispatch,
    getMyTopTracksDispatch
  } = props;
  useEffect(() => {
    // redux缓存，不多发请求
    if (!featuredLists || !featuredLists.size) {
      getFeaturedListsDispatch();
    }
    if (!recentlyPlayedTracks || !recentlyPlayedTracks.size) {
      getRecentlyPlayedTracksDispatch();
    }
    if (!myTopArtists || !myTopArtists.size) {
      getMyTopArtistsDispatch();
    }
    if (!newReleases || !newReleases.size) {
      getNewReleasesDispatch();
    }
    if (!topTracks || !topTracks.size) {
      getMyTopTracksDispatch();
    }
  }, []);

  const recentlyPlayedTracksJS = recentlyPlayedTracks
    ? recentlyPlayedTracks.toJS()
    : [];
  const featuredListsJS = featuredLists ? featuredLists.toJS() : [];
  const myTopArtistsJS = myTopArtists ? myTopArtists.toJS() : [];
  const newReleasesJS = newReleases ? newReleases.toJS() : [];
  const myTopTracksJS = topTracks ? topTracks.toJS() : [];

  return (
    <div>
      <Content>
        <Title name="首页"></Title>
        <Scroll className="list">
          <div>
            <h1 className="title"> 你的最近播放 </h1>
            <HorContent onScroll={forceCheck}>
              <Scroll direction={"horizental"}>
                <RecommendRecentList
                  recommendRecentList={recentlyPlayedTracksJS}
                  routeType={"recentlyPlayedTracks_type"}
                ></RecommendRecentList>
              </Scroll>
            </HorContent>
            <h1 className="title"> 你最爱的歌手 </h1>
            <HorContent onScroll={forceCheck}>
              <Scroll direction={"horizental"}>
                <RecommendRecentList
                  recommendRecentList={myTopArtistsJS}
                  routeType={"myTopArtists_type"}
                ></RecommendRecentList>
              </Scroll>
            </HorContent>
            {/* <h1 className='title'> 一起踏上{} 的音乐之旅吧 ！</h1>
            <HorContent onScroll={forceCheck}>
              <Scroll direction={"horizental"}>
                <RecommendRecentList
                  recommendRecentList={myTopArtistsJS}
                ></RecommendRecentList>
              </Scroll>
            </HorContent> */}
            <h1 className="title"> 最新发行歌曲 </h1>
            <HorContent onScroll={forceCheck}>
              <Scroll direction={"horizental"}>
                <RecommendRecentList
                  recommendRecentList={newReleasesJS}
                  routeType={"newReleases_type"}
                ></RecommendRecentList>
              </Scroll>
            </HorContent>
            <h1 className="title"> 你播不停的音乐 </h1>
            <HorContent onScroll={forceCheck}>
              <Scroll direction={"horizental"}>
                <RecommendRecentList
                  recommendRecentList={myTopTracksJS}
                  routeType={"myTopTracks_type"}
                ></RecommendRecentList>
              </Scroll>
            </HorContent>
            <h1 className="title"> 情绪 </h1>
            <HorContent onScroll={forceCheck}>
              <Scroll direction={"horizental"}>
                <RecommendRecentList
                  recommendRecentList={featuredListsJS}
                  routeType={"featuredLists_type"}
                ></RecommendRecentList>
              </Scroll>
            </HorContent>
            <div className="dummy_place"></div>
            {/* <RecommendList recommendList={recommendationsJS}></RecommendList> */}
          </div>
        </Scroll>
        {enterLoading ? <Loading></Loading> : null}
        {/* 渲染当前路由的下一层子路由 */}
        {renderRoutes(props.route.routes)}
      </Content>
    </div>
  );
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = state => ({
  // 不要在这里将数据 toJS 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  enterLoading: state.getIn(["recommend", "enterLoading"]),
  recentlyPlayedTracks: state.getIn(["recommend", "recentlyPlayedTracks"]),
  featuredLists: state.getIn(["recommend", "featuredLists"]),
  myTopArtists: state.getIn(["recommend", "myTopArtists"]),
  newReleases: state.getIn(["recommend", "newReleases"]),
  topTracks: state.getIn(["recommend", "topTracks"])
});

// 在actionCreator里的传输方法 映射 dispatch 到 props 上
const mapDispatchToProps = dispatch => {
  return {
    getRecentlyPlayedTracksDispatch() {
      dispatch(actionTypes.getMyRecentlyPlayedTracks());
    },
    getFeaturedListsDispatch() {
      dispatch(actionTypes.getFeaturedLists());
    },
    getMyTopArtistsDispatch() {
      dispatch(actionTypes.getMyTopArtists());
    },
    getNewReleasesDispatch() {
      dispatch(actionTypes.getNewReleases());
    },
    getMyTopTracksDispatch() {
      dispatch(actionTypes.getMyTopTracks());
    }
  };
};

// 将 ui 组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend));

// export default React.memo(Recommend);
