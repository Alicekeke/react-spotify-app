import styled from "styled-components";
import style from "../../assets/global-style";

export const Content = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    -17deg,
    ${style["background-color"]} 85%,
    #5e5e58
  );
  color: #ffffff;
`;
export const Bg = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  background: ${style["background-color"]};
  .recentlylist {
    h2 {
      padding: 30px 0 20px 0;
      font-size: ${style["font-size-l"]};
      color: ${style["font-color-light"]};
      text-align: center;
    }
  }
  .dummy_place {
    position: relative;
    height: 130px;
    width: 100%;
  }
`;

export const Tab = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding-top: 20px;
  a {
    line-height: 30px;
    font-size: ${style["font-size-m"]};
    padding: 5px 0 5px 0;
    &.active {
      span {
        color: #fba;
      }
    }
    & > .iconfont {
      font-size: 20px;
      padding: 1px 20px 1px 15px;
    }
  }
`;
