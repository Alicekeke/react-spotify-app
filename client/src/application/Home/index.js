
// 渲染第二层功能组件
import React from 'react';
import { renderRoutes } from "react-router-config";
// import { Top } from './style';
import { Bottom } from './style';
// NavLink做组件跳转
import { NavLink } from 'react-router-dom';
import Player from '../../components/player';
 
function Home (props) {
  const { route } = props;

  return (
    <div>
      <Bottom>
      <NavLink to="/recommend"><span className="iconfont home">&#xe608;<p>Home</p></span></NavLink>
      <NavLink to="/browse"><span className="iconfont browse">&#xe62c;<p>browse</p></span></NavLink>
      <NavLink to="/search"><span className="iconfont search">&#xe62f;<p>Search</p></span></NavLink>
      <NavLink to="/library"><span className="iconfont library">&#xe6e8;<p>Library</p></span></NavLink>
      <NavLink to="/premium"><span className="iconfont premium">&#xe8ba;<p>Premium</p></span></NavLink>
    </Bottom>
    { renderRoutes (route.routes) }
    {/* <Player></Player> */}
    </div>
  )
}

export default React.memo (Home);