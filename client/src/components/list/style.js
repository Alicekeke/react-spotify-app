import styled from "styled-components";
import style from "../../assets/global-style";

export const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
`;
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export const ListItem = styled.div`
  position: relative;
  width: 56%;
  padding-bottom: 20px;
  .img_wrapper {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
    overflow: hidden;
    width: 120%;
    margin-left: -10%;
    margin-top: 7px;
    padding: 0 2px;
    height: 50px;
    text-align: center;
    font-size: ${style["font-size-m"]};
    line-height: 1.4;
    color: ${style["font-color-desc-v2"]};
  }
`;
