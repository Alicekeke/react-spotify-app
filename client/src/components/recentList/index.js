import React from 'react';
import { RecentListWrapper, RecentList, RecentListItem} from './style'
import { withRouter } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

function RecommendRecentList (props) {
  // 设置跳转
  const enterDetail = (id, type) => {
    // console.log(id, type)
    switch (type){
      case 'newReleases_type':
        props.history.push(`/album/${id}`);
        break;
      case 'recentlyPlayedTracks_type':
        props.history.push(`/album/${id}`);
        break;
      case 'featuredLists_type':
        props.history.push(`/featuredLists_type/${id}`);
        break;
      case 'myTopArtists_type':
        props.history.push(`/artist/${id}`);
        break;
      case 'myTopTracks_type':
        props.history.push(`/album/${id}`)
        break;
    }
  }
  return (
    <RecentListWrapper >
      <RecentList>
        {
          props.recommendRecentList.map((item, index) => {
            return (
              <RecentListItem  key={item.id} onClick={() => enterDetail(item.album ? item.album.id : item.id, props.routeType)}>
                <div>
                  {/*key must unique */}
                  {/* <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music"/>}> */}
                    <img src={item.album ? item.album.images[1].url : item.images[0].url}/>
                  {/* </LazyLoad> */}
                </div>
              <div className="desc">{item.album ? item.album.name : item.name}</div>
              </RecentListItem>
            )
          })
        }
      </RecentList>
    </RecentListWrapper>
  );
}

export default React.memo (withRouter (RecommendRecentList))