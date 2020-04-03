import styled from "styled-components";
import style from "../../assets/global-style";
// 组件样式名
export const Bottom = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 999;
  flex-direction: row;
  justify-content: space-between;
  background: ${style["background-bottom-tab"]};
  a {
    flex: 1;
    padding: 4px 0;
    line-height: 35px;
    color: #acadb2;
    text-align: center;
    &.active {
      span {
        color: #f1f1f1;
      }
    }
    & > span {
      font-size: 25px;
    }
    p {
      font-size: 10px;
      line-height: 13px;
      width: 100%;
      padding-bottom: 5px;
    }
  }
`;
