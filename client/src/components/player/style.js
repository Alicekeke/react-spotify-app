import styled, {keyframes} from'styled-components';
import style from '../../assets/global-style';

const rotate = keyframes`
  0%{
    transform: rotate (0);
  }
  100%{
    transform: rotate (360deg);
  }
`

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 60px;
  z-index: 999;
  width: 100%;
  height: 40px;
  background: ${style ["background-bottom-tab"]};
  &.mini-enter {
    transform: translate3d (0, 100%, 0);
  }
  &.mini-enter-active {
    transform: translate3d (0, 0, 0);
    transition: all 0.4s;
  }
  &.mini-exit-active {
    transform: translate3d (0, 100%, 0);
    transition: all .4s
  }
  .icon {
    flex: 0 0 40px;
    width: 40px;
    padding: 0 10px 0 20px;
    .iconfont {
      font-size: 22px;
      color: ${style ["font-color-light"]};
    }
    .imgWrapper {
      width: 100%;
      height: 100%;
      img {
        border-radius: 50%;
        &.play {
          animation: ${rotate} 10s infinite;
          &.pause {
            animation-play-state: paused;
          }
        }
      }
      }
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    .name {
      i {
        color: ${style ["font-color-light"]};
        padding-right: 3px;
      }
      margin-bottom: 2px;
      font-size: ${style ["font-size-s"]};
      color: ${style ["font-color-noclick"]};
      ${style.noWrap ()}
    }
    .desc {
      font-size: ${style ["font-size-ss"]};
      color: ${style ["font-color-desc"]};
      ${style.noWrap ()}
    }
  }
  .control {
    flex: 0 0 30px;
    padding: 0 10px;
    .iconfont, .icon-playlist {
      font-size: 30px;
      color: ${style ["font-color-light"]};
    }
    .icon-mini {
      font-size: ${style ["font-size-l"]};
      left: 8px;
      top: 8px;
      &.icon-play {
        left: 9px
      }
    }
  }
`