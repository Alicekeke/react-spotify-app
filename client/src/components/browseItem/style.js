import styled from "styled-components";
import style from "../../assets/global-style";

export const ItemWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .dummy_place {
    height: 200px;
    width: 100%;
  }
`;

export const Item = styled.div`
  display: inline-block;
  text-align: center;
  width: 116px;
  img {
    width: 106px;
    height: 100px;
    padding: 5px;
  }
  p {
    padding: 2px 0 6px 0;
    font-size: ${style["font-size-s"]};
    color: ${style["font-color-desc-v2"]};
    word-break: break-all;
  }
`;
