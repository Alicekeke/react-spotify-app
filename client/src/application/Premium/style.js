import styled from'styled-components';
import style from '../../assets/global-style';

export const Bg = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative; 
  background:  linear-gradient(-17deg, ${style ["background-color"]} 75%, #5e5e58);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .avatar{
    
    img{
    width: 200px;
    height: 240px;
    border-radius: 50%
  }
  }
  .userName{
    padding: 40px 0;
    color: ${style ["font-color-light"]};
    font-size: ${style ["font-size-lll"]};
  }
  .info{
    padding: 40px 0;
    div{
      padding: 10px 0;
    }
    span:first-child {
      font-size: ${style ["font-size-l"]};
      color: ${style ["font-color-desc-v2"]};
      padding: 0 10px;
    }
    span:last-child {
      text-align: center;
      color: ${style ["theme-color-green"]};
      font-size: ${style ["font-size-l"]};
    }
  }
`
