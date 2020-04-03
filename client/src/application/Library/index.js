//src/appliction/Library/index.js
import React, { useEffect } from "react";
import Title from "../../components/title";
import Scroll from "../../baseUI/scroll";
import { forceCheck } from "react-lazyload";
import * as actionTypes from "../Recommend/store/actionCreators";
import AblumRow from "../../components/album-row";
import { Tab, Bg, Content } from "./style";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom"; // 利用 NavLink 组件进行路由跳转

function Library(props) {
  const { recentlyPlayedTracks } = props;
  const { getRecentlyPlayedTracksDispatch } = props;

  useEffect(() => {
    getRecentlyPlayedTracksDispatch();
  }, []);

  const recentlyPlayedTracksJS = recentlyPlayedTracks
    ? recentlyPlayedTracks.toJS()
    : [];

  return (
    <div>
      <Content>
        <Title name="你的音乐库"></Title>
        <Scroll onScroll={forceCheck}>
          <Bg>
            <Tab>
              <NavLink to="a">
                <span className="iconfont palylist">&#xe62b;</span>
                <span> 播放清单 </span>
              </NavLink>
              <NavLink to="/a">
                <span className="iconfont brower">&#xe624;</span>
                <span> 电台 </span>
              </NavLink>
              <span to="/b">
                <span className="iconfont track">&#xe52e;</span>
                <span> 歌曲 </span>
              </span>
              <NavLink to="/c">
                <span className="iconfont ablum">&#xf0181;</span>
                <span> 专辑 </span>
              </NavLink>
              <NavLink to="/d">
                <span className="iconfont artists">&#xe628;</span>
                <span> 艺人 </span>
              </NavLink>
              <NavLink to="/e">
                <span className="iconfont podcast">&#xe8ba;</span>
                <span> podcast </span>
              </NavLink>
              <NavLink to="/f">
                <span className="iconfont video">&#xe605;</span>
                <span> 影片 </span>
              </NavLink>
            </Tab>
            <div className="recentlylist">
              <h2>你的最近播放</h2>
              <AblumRow
                recentlyPlayedTracks={recentlyPlayedTracksJS}
              ></AblumRow>
            </div>
            <div className="dummy_place"></div>
          </Bg>
        </Scroll>
      </Content>
    </div>
  );
}

const mapStateToProps = state => ({
  recentlyPlayedTracks: state.getIn(["recommend", "recentlyPlayedTracks"])
});

const mapDispathchToProps = dispatch => {
  return {
    getRecentlyPlayedTracksDispatch() {
      dispatch(actionTypes.getMyRecentlyPlayedTracks());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathchToProps
)(React.memo(Library));
