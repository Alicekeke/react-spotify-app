import React, { useEffect } from "react";
import { renderRoutes } from "react-router-config";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import Scroll from "../../baseUI/scroll/index";
import Title from "../../components/title";
import * as actionTypes from "./store/actionCreators";
import BrowseItem from "../../components/browseItem";
import { connect } from "react-redux";
import { Content } from "./style";
import Album from "../Album";

function Browse(props) {
  const { genres } = props;
  const { getGenresDataDispatch } = props;
  const match = props.match;
  // console.log(match)
  useEffect(() => {
    getGenresDataDispatch();
  }, []);

  const genresJS = genres ? genres.toJS() : [];

  return (
    <Content>
      <Title name="浏 览"></Title>
      <Router>
        <div className="browse-sort">
          <NavLink to={`#${match.url}/genres`} activeClassName="selected">
            <h4>Genres</h4>
          </NavLink>
          <NavLink to={`#${match.url}/new-releases`} activeClassName="selected">
            <h4>NewReleases</h4>
          </NavLink>
          <NavLink to={`#${match.url}/featured-playlists`}>
            <h4>FeaturedPlaylists</h4>
          </NavLink>
        </div>
        <Scroll className="list">
          <Switch>
            <Route exact path="/">
              <BrowseItem genres={genresJS}></BrowseItem>
            </Route>
            <Route path={`#${match.url}/new-releases`}>
              <BrowseItem genres={genresJS}></BrowseItem>
            </Route>
            <Route path={`#${match.url}/featured-playlists`}>
              <BrowseItem genres={genresJS}></BrowseItem>
            </Route>
          </Switch>
        </Scroll>
      </Router>
      {/* <BrowseItem genres={genresJS} >
        </BrowseItem> */}
      {renderRoutes(props.route.routes)}
    </Content>
  );
}
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = state => ({
  genres: state.getIn(["browse", "genres"])
});

// 映射 dispatch 到 props 上
const mapDispatchToProps = dispatch => {
  return {
    getGenresDataDispatch() {
      dispatch(actionTypes.getGenres());
    }
  };
};

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Browse));
