//从地址栏url获取access_token & refresh_token
export const getHashParams = () => {
  const hashParams = {};
  let access_token, refresh_token;
  if (window.location.href.match(/access_token=([^&]*)/)) {
    access_token = window.location.href.match(/access_token=([^&]*)/)[1];
  }
  if (window.location.href.match(/refresh_token=([^&]*)/)) {
    refresh_token = window.location.href.match(/refresh_token=([^&]*)/)[1];
  }
  hashParams["access_token"] = access_token;
  hashParams["refresh_token"] = refresh_token;
  return hashParams;
};
getHashParams();

// 防抖
const debounce = (func, delay) => {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
    }, delay);
  };
};

// 处理歌手列表拼接歌手名字
const getName = list => {
  let str = "";
  list.map((item, index) => {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
};

// 判断一个对象是否为空
const isEmptyObject = obj => !obj || Object.keys(obj).length === 0;

export { debounce, getName, isEmptyObject };
