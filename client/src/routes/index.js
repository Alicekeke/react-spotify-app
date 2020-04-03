//routes/index.js
import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../application/Home"; //公共组件
import Recommend from "../application/Recommend"; //主页推荐页
import Browse from "../application/Browse"; //浏览页
import Album from "../application/Album";
import Artist from "../application/Artist";
import Search from "../application/Search"; //搜索
import Library from "../application/Library"; //列表 包括playlist Artist Albums Poadcasts
import Premium from "../application/Premium"; //付费会员

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/recommend"} />
      },
      {
        path: "/album/:id",
        component: Album
      },
      {
        path: "/recommend/",
        component: Recommend
      },
      {
        path: "/browse",
        component: Browse,
        // 浏览页面子路由
        routes: [
          {
            path: "/browse/genres/:name",
            component: Browse
          },
          {
            path: "/browse/new-releases",
            component: Album
          },
          {
            path: "/browse/featured-playlists",
            component: Album
          }
        ]
      },
      {
        path: "/artist/:id",
        component: Artist
      },
      {
        path: "/search",
        component: Search
      },
      {
        path: "/library",
        component: Library
      },
      {
        path: "/premium",
        component: Premium
      }
    ]
  }
];
