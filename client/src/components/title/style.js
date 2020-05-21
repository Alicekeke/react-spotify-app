import styled from "styled-components";
import style from "../../assets/global-style";

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 45px;
  box-sizing: content-box;
  background: ${style["background-bottom-tab"]};
  & > .avater {
    display: inline-block;
    width: 30px;
    & > span {
      font-size: 25px;
    }
  }
  & > span {
    color: #ffffff;
    font-size: ${style["font-size-s"]};
    line-height: 45px;
    &.setting {
      font-size: 25px;
      padding: 0px 10px 10px 0px;
    }
  }
`;
