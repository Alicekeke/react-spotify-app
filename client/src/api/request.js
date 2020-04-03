// 封装不同接口的网络请求
import { axiosInstance } from "./config";

let recentlyPlayed, //最近播放
  featuredPlaylists, //推荐列表
  topArtists, //最爱歌手
  genres, //分类浏览
  genrePlaylists, //按分类浏览获得的歌单
  playlistTracks, //按歌单id返回歌单列表
  newReleases, //最新发行
  topTracks, //我最爱的歌曲
  fetchedAlbum, //按id查找album
  artistAbout, //歌手简介信息
  artistAlbums, //歌手的专辑
  artistTopTracks, //歌手最跑火单曲
  userDetail = null;

// 定义供页面使用的方法
export const login = () => {};

// ------------user---------------
// 获取个人信息
export const getCurrentUserRequest = async () => {
  try {
    await axiosInstance.get("me").then(response => {
      userDetail = response;
    });
    return userDetail;
  } catch (error) {
    console.log(error);
  }
};

// 最近播放
export const getMyRecentlyPlayedTracksRequest = async () => {
  try {
    await axiosInstance.get("/me/player/recently-played").then(response => {
      recentlyPlayed = response.items
        .map(track => track.track)
        .filter(
          (track, index, self) =>
            index === self.findIndex(t => t.name === track.name)
        );
    });
    return recentlyPlayed;
  } catch (error) {
    console.log("错误情况", error);
  }
};
// 推荐歌单
export const getFeaturedListsRequest = async () => {
  try {
    await axiosInstance.get("/browse/featured-playlists").then(response => {
      featuredPlaylists = response.playlists.items;
    });
    return featuredPlaylists;
  } catch (error) {
    console.log("网络异常");
  }
};
// 最爱歌手
export const getMyTopArtistsRequest = async () => {
  try {
    await axiosInstance.get("/me/top/artists").then(response => {
      topArtists = response.items;
    });
    return topArtists;
  } catch (error) {
    console.log("网络异常");
  }
};
// 我最爱的歌曲
export const getTopTracksRequest = async () => {
  await axiosInstance
    .get("/me/top/tracks")
    .then(response => (topTracks = response.items));
  // console.log(topTracks)
  return topTracks;
};

// -----------browse----------
// 分类浏览
export const getGenresRequest = async () => {
  try {
    await axiosInstance.get("/browse/categories").then(response => {
      genres = response.categories.items;
    });
    return genres;
  } catch (error) {
    console.log("网络异常");
  }
};

// brower浏览播放歌单列表
export const getGenrePlaylistsRequest = async genre => {
  try {
    await axiosInstance
      .get(`/browse/categories/${genre}/playlists`)
      .then(
        response =>
          (genrePlaylists = { items: response.data.playlists.items, genre })
      );
    // console.log("getGenrePlayLists", genrePlaylists);
    return genrePlaylists;
  } catch (error) {
    console.log(error);
  }
};

// 最新发行的音乐
export const getNewReleasesRequest = async () => {
  try {
    await axiosInstance
      .get("/browse/new-releases")
      .then(response => (newReleases = response.albums.items));
    // console.log(newReleases)
    return newReleases;
  } catch (error) {
    console.log(error);
  }
};

export const checkSavedTracks = async trackIds => {
  let checks = [];
  while (trackIds.length > 50) {
    let splitTracks = trackIds.splice(0, 50);
    await axiosInstance
      .get(`/me/tracks/contains?ids=${splitTracks}`)
      .then(response => checks.push(...response.data));
  }
  if (trackIds.length > 0) {
    await axiosInstance
      .get(`/me/tracks/contains?ids=${trackIds}`)
      .then(response => checks.push(...response.data));
  }
  // console.log(checks);
  return checks;
};

// -------------------search-------------------
// 搜索方法接受搜索词输入，将搜索词值传递给Spotify请求，然后将响应作为JSON格式的曲目列表返回
export const getSearchSpotifyRequest = async term => {
  let searchResults = null;
  try {
    await axiosInstance.get(`/search?type=track&q=${term}`).then(response => {
      // 如果没有找到返回空数组
      if (response.tracks.items.length === 0) return [];
      // 映射每个歌曲并返回一个对象数组，每个对象包含歌曲属性
      // Map through each track and return an array of objects each containing track properties
      searchResults = response.tracks.items;
    });
    return searchResults;
  } catch (error) {
    console.log(error);
  }
};

// 按id返回播放列表曲目
export const getPlaylistTracksRequest = async id => {
  try {
    await axiosInstance
      .get(`/playlists/${id}/tracks`)
      .then(response => (playlistTracks = response.data.items))
      .then(async () => {
        let checks = await checkSavedTracks(
          playlistTracks.map(track => track.track.id)
        );
        playlistTracks.forEach(
          (track, index) => (track.track.saved = checks[index])
        );
      });
    // console.log("playlistTracks", playlistTracks);
    return playlistTracks;
  } catch (error) {
    console.log(error);
  }
};

// --------------------------Album--------------
// 按album-id get 歌单信息
export const getAlbumByIdRequest = async id => {
  try {
    await axiosInstance
      .get(`/albums/${id}`)
      .then(response => (fetchedAlbum = response));
    // console.log(fetchedAlbum)
    return fetchedAlbum;
  } catch (error) {
    console.log(error);
  }
};

// -------------artist------------
// 获取歌手简要信息
export const getArtistAboutRequest = async id => {
  try {
    await axiosInstance
      .get(`/artists/${id}`)
      .then(response => (artistAbout = response));
    return artistAbout;
  } catch (error) {
    console.log(error);
  }
};

// 获取所有专辑
export const getArtistAlbumsRequest = async id => {
  try {
    await axiosInstance
      .get(`/artists/${id}/albums?country=US`)
      .then(
        response =>
          (artistAlbums = response.items.filter(
            (album, index, self) =>
              index === self.findIndex(t => t.name === album.name)
          ))
      );
    // console.log('artistAlbum',artistAlbums)
    return artistAlbums;
  } catch (error) {
    console.log(error);
  }
};

// 获取最跑火的单曲
export const getArtistTopTracksRequest = async id => {
  try {
    await axiosInstance
      .get(`/artists/${id}/top-tracks?country=US`)
      .then(response => {
        artistTopTracks = response.tracks;
      });
    // console.log('artistTopTracks',artistTopTracks)
    return artistTopTracks;
  } catch (error) {
    console.log(error);
  }
};
