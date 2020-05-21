import styled from "styled-components";
import style from "../../assets/global-style";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${props => (props.play > 0 ? "60px" : 0)};
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background: #181818;
  transform-origin: right bottom;
  /* 进场的瞬间 */
  &.fly-enter,
  &.fly-appear {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  /* 进场过程中 */
  &.fly-enter-active,
  &.fly-appear-active {
    opacity: 1;
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
  }
  /* 离开前的瞬间 */
  &.fly-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  /* 离开过程中 */
  &.fly-exit-active {
    opacity: 0;
    transition: all 0.3s;
    transform: translate3d(100%, 0, 0);
  }
`;

export const TopDesc = styled.div`
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 325px;
  position: relative;
  color: ${style["font-color-light"]};

  .background {
    z-index: -1;
    background: url(${props => props.background}) no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    .filter {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.2);
    }
  }
  .img_wrapper {
    width: 180px;
    height: 180px;
    position: relative;
    /* transform: translate(50%, 50%);        */
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0, 0%, 43%, 0.4), hsla(0, 0%, 100%, 0));
    }
    img {
      width: 180px;
      height: 180px;
      border-radius: 3px;
    }
  }
  .desc_title {
    text-align: center;
    h2 {
      font-size: ${style["font-size-lll"]};
      padding: 10px 0 10px 0;
    }
    span {
      font-size: ${style["font-size-s"]};
    }
  }
  .add_list,
  .isCollected {
    line-height: 34px;
    width: 40px;
    border: 1px solid ${style["font-color-light"]};
    color: ${style["font-color-light"]};
    border-radius: 30%;
    p {
      font-size: ${style["font-size-ss"]};
      line-height: 18px;
    }
  }
  .isCollected {
    display: flex;
    background: ${style["background-color"]};
    color: ${style["font-color-desc"]};
  }
`;
export const SongList = styled.div`
  opacity: 0.98;
  color: ${style["font-color-light"]};
  ${props =>
    props.showBackground
      ? `background: ${style["highlight-background-color"]}`
      : ""}
  .func {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-content: center;
    .play_random {
      display: block;
      width: 150px;
      height: 50px;
      border-radius: 30px;
      text-align: center;
      line-height: 50px;
      background: ${style["theme-color-green"]};
      color: ${style["font-color-light"]};
      > p {
        font-size: ${style["font-size-m"]};
      }
    }
  }
  .dummy_place {
    position: relative;
    height: 130px;
    width: 100%;
  }
`;
export const SongItem = styled.ul`
  > li {
    display: flex;
    height: 56px;
    align-items: center;
    .info {
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      padding: 5px 0 0 20px;
      flex-direction: column;
      justify-content: space-around;
      ${style.noWrap()}
      >span {
        ${style.noWrap()}
      }
      > span:first-child {
        color: ${style["font-color-light"]};
      }
      > span:last-child {
        font-size: ${style["font-size-ss"]};
        color: ${style["font-color-desc-v2"]};
      }
    }
    .more_operate {
      flex-basis: 60px;
      font-size: ${style["font-size-s"]};
      width: 60px;
      height: 60px;
      line-height: 45px;
      text-align: center;
    }
  }
`;
