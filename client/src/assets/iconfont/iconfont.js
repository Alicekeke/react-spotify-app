import { createGlobalStyle } from'styled-components';

export const IconStyle  = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1585189676071'); /* IE9 */
  src: url('iconfont.eot?t=1585189676071#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1585189676071') format('woff'),
  url('iconfont.ttf?t=1585189676071') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1585189676071#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-sousuo:before {
  content: "\e62f";
}

.icon-guangbodiantai:before {
  content: "\e624";
}

.icon-tushuguanlibrary12:before {
  content: "\e6e8";
}

.icon-bofang:before {
  content: "\e60a";
}

.icon-05:before {
  content: "\e608";
}

.icon-spotify:before {
  content: "\e8ba";
}

.icon-yinle1:before {
  content: "\e52e";
}

.icon-hezi:before {
  content: "\e62c";
}

.icon-yinleliebiao:before {
  content: "\e6e4";
}

.icon-zhuanjixiangqing32:before {
  content: "\f0181";
}

.icon-icon-test:before {
  content: "\e6a8";
}

.icon-youbofang:before {
  content: "\e64a";
}

.icon-youbofang-copy-copy:before {
  content: "\e64c";
}

.icon-yinle:before {
  content: "\e62b";
}

.icon-fenxiang:before {
  content: "\e655";
}

.icon-shipinbofangyingpian:before {
  content: "\e605";
}

.icon-shezhi:before {
  content: "\e851";
}

.icon-zanting:before {
  content: "\e63b";
}

.icon-tianjiarenyuan:before {
  content: "\e628";
}

.icon-xiangji:before {
  content: "\e63e";
}

.icon-changyongicon-:before {
  content: "\e617";
}

.icon-sandian:before {
  content: "\e690";
}

.icon-jinyong:before {
  content: "\e629";
}

.icon-tianjialiebiao:before {
  content: "\e701";
}

.icon-xinaixin-fuben:before {
  content: "\e611";
}

.icon-shanchu:before {
  content: "\e501";
}

.icon-fanhui:before {
  content: "\e60d";
}

.icon-xia:before {
  content: "\e6fa";
}


`

