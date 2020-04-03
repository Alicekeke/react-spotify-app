import styled from "styled-components";
import style from "../../assets/global-style";

export const RecentListWrapper = styled.div`
  max-height: 100%;
  min-width: 1400px;
  /* height: 168px; */
`;

export const RecentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-bottom: 50px;
  padding-left: 15px;
  overflow: hidden;
`;

export const RecentListItem = styled.div`
  position: relative;
  height: 120px;
  width: 120px;
  flex-shrink: 0;
  padding-right: 20px;
  img {
    width: 100%;
    height: 100%;
  }
  .desc {
    font-size: ${style["font-size-s"]};
    text-align: center;
    padding-top: 8px;
    word-break: normal;
  }
`;
