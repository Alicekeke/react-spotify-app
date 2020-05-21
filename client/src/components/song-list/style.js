import styled from 'styled-components';
import style from '../../assets/global-style';

export const SongList = styled.div`
  border-radius: 10px;
  opacity: 0.98;
  ${props => props.showBackground ? `background: ${style["highlight-background-color"]}`: ""};
`
export const SongItem = styled.ul`
  >li{
    display: flex;
    height: 48px;
    align-items: center;  
    .info{
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      padding: 5px 0 0 25px;
      flex-direction: column;
      justify-content: space-around;
      ${style.noWrap()}
      >span{
        ${style.noWrap()}
      }
      >span:first-child{
        color: ${style["font-color-light"]};
      }
      >span:last-child{
        font-size: ${style["font-size-s"]};
        color: ${style ["font-color-desc-v2"]};
      }
    }
    .more_operate {
      flex-basis: 60px;
      font-size: ${style ["font-size-ss"]};
      color: ${style ["font-color-light"]};
      width: 60px;
      height: 60px;
      line-height: 45px;
      text-align: center;
    }
  }
`