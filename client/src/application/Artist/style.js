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
  background: ${style["background-color"]};
  transform-origin: right bottom;
  &.fly-enter,
  &.fly-appear {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-appear-active {
    opacity: 1;
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    opacity: 0;
    transition: all 0.3s;
    transform: translate3d(100%, 0, 0);
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 50%;
  /* padding-top: 75%; */
  transform-origin: top;
  background: linear-gradient(
    -17deg,
    ${style["background-color"]} 55%,
    #5e5e58
  );
  background-size: cover;
  z-index: 50;
  .img_wrapper {
    width: 186px;
    position: absolute;
    top: -32px;
    height: 186px;
    background: url(${props => props.bgUrl}) no-repeat;
    transform: translate(50%, 50%);
    background-size: 100% 100%;
    border-radius: 50%;
  }
  .filter {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: transparent;
    filter: blur(20px);
  }
`;

export const CollectButton = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 270px;
  margin: auto;
  box-sizing: border-box;
  width: 120px;
  height: 40px;
  /* margin-top: -55px; */
  z-index: 50;
  background: ${style["theme-color-green"]};
  color: ${style["font-color-light"]};
  border-radius: 20px;
  text-align: center;
  font-size: 0;
  line-height: 40px;
  .text {
    display: inline-block;
    font-size: 14px;
    letter-spacing: 5px;
  }
`;

export const SongListWrapper = styled.div`
  position: absolute;
  z-index: 50;
  top: 0px;
  left: 0;
  bottom: 0;
  right: 0;
  > div {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: visible;
  }
  h2 {
    font-size: ${style["font-size-l"]};
    color: ${style["font-color-light"]};
    text-align: center;
    padding: 20px 0 16px 0;
  }
`;
export const BgLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  border-radius: 10px;
  background: rgba(20, 20, 20);
  z-index: 50;
`;
