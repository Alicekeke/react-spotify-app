import axios from "axios";
import { getHashParams } from "./utils";
// export const baseUrl = 'http://localhost:8888';
export const baseUrl = "https://api.spotify.com/v1";

const EXPIRATION_TIME = 3600 * 1000; // 3600 seconds * 1000 = 1 hour in milliseconds

// 设置过期时间戳
const setTokenTimestamp = () =>
  window.localStorage.setItem("spotify_token_timestamp", Date.now());

const setLocalAccessToken = token => {
  setTokenTimestamp();
  window.localStorage.setItem("spotify_access_token", token);
};

const setLocalRefreshToken = token =>
  window.localStorage.setItem("spotify_refresh_token", token);
const getTokenTimestamp = () =>
  window.localStorage.getItem("spotify_token_timestamp");
const getLocalAccessToken = () =>
  window.localStorage.getItem("spotify_access_token");
const getLocalRefreshToken = () =>
  window.localStorage.getItem("spotify_refresh_token");

// 用refresh_token来更新access_token
const refreshAccessToken = async () => {
  try {
    const { data } = await axios.get(
      `/refresh_token?refresh_token=${getLocalRefreshToken()}`
    );
    const { access_token } = data;
    setLocalAccessToken(access_token); //同时更新access_token
    window.location.reload();
    return;
  } catch (error) {
    console.log(error);
  }
};

// 从查询参数中获取访问令牌
export const getAccessToken = () => {
  const { access_token, refresh_token } = getHashParams();

  // 如果token过期了
  if (Date.now() - getTokenTimestamp() > EXPIRATION_TIME) {
    console.warn("Access token has expired, refreshing...");
    refreshAccessToken();
  }

  const localAccessToken = getLocalAccessToken();
  const localRefreshToken = getLocalRefreshToken();

  // 如果localStorage没有refresh_token，那么在这设置refresh_token
  if (!localRefreshToken || localRefreshToken === "undefined") {
    setLocalRefreshToken(refresh_token);
  }
  // 如果localStorage没有access_token，那么在这设置access_token
  if (!localAccessToken || localAccessToken === "undefined") {
    setLocalAccessToken(access_token);
    return access_token;
  }
  return localAccessToken;
};

export const token = getAccessToken();
// axios.creat 创建实例
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

// window.history.pushState:在当前页面创建并激活新的历史记录 （不是最好选择）
window.history.pushState("Access Token", null, "/");

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  res => {
    if (res.status !== 200) {
      console.log("糟糕！网络异常");
      return Promise.reject(res);
    }
    return res.data;
  },
  err => {
    console.log(err, "网络错误");
  }
);

export { axiosInstance };
