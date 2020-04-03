import styled from "styled-components";
import style from "../../assets/global-style";

export const Content = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0;
  width: 100%;
  background: linear-gradient(-17deg, ${style["background-color"]} 85%, #5e5e58);
  color: #ffffff;
  .browse-sort{
    display: flex;
    align-items: center;
    justify-content: space-around;
    line-height: 45px;
    text-align: center;
    border-top: 1px solid #c2c2c2;
    border-bottom: 1px solid #c2c2c2;
    margin-bottom: .5rem;
    a {
      font-size: ${style["font-size-s"]};
      color: #ffffff;
    }
    &.active {
      a {
        color: #f1f1f1;
      }
    }
    /* p {
      font-size: 10px;
      line-height: 13px;
      width: 100%;
      padding-bottom: 5px;
    } */
  }

  /* & h1 {
    padding: 30px 0 20px 0; 
    text-align: center;
    font-size: ${style["font-size-l"]};
    color: ${style["font-color-light"]};
  }; */
`;
