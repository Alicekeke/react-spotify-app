// 头顶的tab-title
import React from 'react'
import { Top } from './style'

function Title (props){
  return (
    <div>
      <Top>
          <div className="avater">
            {/* <image></image> */}
          </div>
          <span>{props.name}</span>
          <span className="iconfont setting">&#xe851;</span>
      </Top>
    </div>
  )
}

export default React.memo (Title)