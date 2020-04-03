import styled from'styled-components';
import style from '../../assets/global-style';

export const Content = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(-17deg, ${style ["background-color"]} 85%, #5e5e58);
  color: #ffffff;
  .title {
      font-weight: 400;
      text-align: center;
      font-size: 20px;
      line-height: 40px;
      margin-bottom: 10px;
  };
  .dummy_place {
    position: relative;
    height: 130px;
    width: 100%;
  }
`
export const HorContent = styled.div`

`
