import styled from "styled-components";
import style from "../../assets/global-style";

export const Row = styled.div`
  width: 100%;
  color: ${style["font-color-light"]};
  .rowItem {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 8px 0 6px 15px;
    border-bottom: 2px solid transparent;
    .image {
      border-radius: 5px;
      img {
        height: 60px;
      }
    }
    .desc {
      flex: 1;
      padding: 10px 15px 15px 15px;
      color: ${style["font-color-light"]};
      font-size: ${style["font-size-m"]};
      .artist {
        padding-top: 7px;
        white-space: nowrap;
        color: ${style["font-color-noclick"]};
        font-size: ${style["font-size-s"]};
        ${style.noWrap()}
      }
    }
    .more_operate {
      flex-basis: 60px;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      .iconfont {
        font-size: ${style["font-size-s"]};
        color: ${style["font-color-noclick"]};
      }
    }
  }
`;