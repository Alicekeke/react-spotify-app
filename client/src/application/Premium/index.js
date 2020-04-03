//src/appliction/Premium/index.js
import React from "react";
import { Bg, Word } from "./style";
import { getCurrentUserRequest } from "../../api/request";

function Premium(props) {
  // 不用redux，直接调getCurrentUserRequest，但这涉及到promise和异步的问题，等我补补课😥

  // let userDetail = {}
  // getCurrentUserRequest().then (data => {
  //   userDetail.images = data.images[0].url
  //   userDetail.display_name = data.display_name;
  // })

  return (
    <Bg>
      {/* <Word>
          <p>No money</p>
          <p>No idol :)</p>
        </Word> */}
      <div className="avatar">
        <img src="https://i.scdn.co/image/ab6775700000ee8591921b12e871f1e336d31b67"></img>
      </div>
      <p className="userName"> Chen</p>
      <div className="info">
        <div className="following">
          <span> following</span>
          <span>1</span>
        </div>
        <div className="country">
          <span> country</span>
          <span>US</span>
        </div>
      </div>
    </Bg>
  );
}

export default React.memo(Premium);
