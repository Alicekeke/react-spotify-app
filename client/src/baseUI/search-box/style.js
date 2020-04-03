import styled from'styled-components';
import style from '../../assets/global-style';

export const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  padding-right: 20px;
  height: 50px;
  background: ${style ["background-search-tab"]};
  .icon-back {
    font-size: ${style ["font-size-l"]};
    padding-right: 10px;
    color: ${style ["font-color-light"]};
  }
  .box {
    flex: 1;
    margin: 0 5px;
    line-height: 45px;
    background: ${style ["background-search-tab"]};
    color: ${style ["highlight-background-color"]};
    font-size: ${style ["font-size-m"]};
    outline: none;
    border: none;
    caret-color: ${style ["theme-color-green"]};
    &::placeholder {
      color: ${style ["font-color-light"]};
    }
  }
  .icon-delete {
    font-size: 24px;
    color: ${style ["font-color-light"]};
  }
`