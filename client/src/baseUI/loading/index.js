import React from "react";
import styled, { keyframes } from "styled-components";
import style from "../../assets/global-style";

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const LoadingWrapper = styled.div`
  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    border: 0.45rem solid #008000;
    border-top-color: ${style["theme-color-green"]};
    border-radius: 50%;
    background-color: transparent;
    animation: ${loading} 750ms infinite linear;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  > div:nth-child(2) {
    animation-delay: -0.7s;
  }
`;

function Loading() {
  return (
    <LoadingWrapper>
      <div></div>
      <div></div>
    </LoadingWrapper>
  );
}

export default React.memo(Loading);
