import styled from "styled-components";
import style from "../../assets/global-style";

// 最上面的search 滑动变小 transfrom或者react都能忽视
export const Bg = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  font-family: Georgia;
  background: ${style["background-color"]};
  .search_Icon {
    font-size: 93px;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  .ad {
    position: absolute;
    width: 100vw;
    left: 50%;
    top: 52%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: ${style["font-color-light"]};
    .big {
      font-size: ${style["font-size-l"]};
      padding-top: 40px;
    }
    .small {
      font-size: ${style["font-size-s"]};
      padding: 15px 0;
    }
  }
`;

// 搜索框样式
export const SearchBar = styled.div`
  width: 90%;
  position: relative;
  z-index: 99;
  margin: auto;
  top: 20px;
  height: 35px;
  background: ${style["background-search-tab"]};
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
  color: ${style["font-color-light"]};
  & > span {
    position: absolute;
    right: 11px;
    font-size: 22px;
    line-height: 35px;
  }
`;
// 包裹搜索结果
export const ShortcutWrapper = styled.div`
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
  display: ${props => (props.show ? "" : "none")};
`;
