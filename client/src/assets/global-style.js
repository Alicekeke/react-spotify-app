// 扩大可点击区域
const extendClick = () => {
  return `
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -10px; bottom: -10px; left: -10px; right: -10px;
    };
  `
}
// 一行文字超出打点
const noWrap = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `
}

export default {
  'theme-color-shadow': 'rgba (212, 68, 57, .5)',
  'theme-color-green': '#1db954',//主题绿
  'font-color-light': '#fefefe',  //白亮字
  'font-color-desc': '#404040',//灰字
  'font-color-desc-v2': '#bba8a8',// 略淡
  'font-color-noclick': '#acadb2',  //图标未被点击，高亮图标白色#ffffff
  'font-size-ss': '10px',
  'font-size-s': '14px',
  'font-size-m': '16px',
  'font-size-l': '18px',
  'font-size-ll': '24px',
  'font-size-lll': '31px',
  "border-color": '#e4e4e4',
  'background-color': '#121212',
  'background-bottom-tab': '#212226',
  'background-search-tab': '#424345',
  'background-gradient-color': ' #A4A4A3',
  'background-color-shadow': 'rgba (0, 0, 0, 0.3)',
  'highlight-background-color': '#fff',
  extendClick,
  noWrap
}
