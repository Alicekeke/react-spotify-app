import React, { useState, useRef } from 'react';
import { PlayerContainer } from './style';

function Player (props) {

  const { playPic, songName, artist, preview_url } = props;
  const [playing, setPlaying] = useState(false)


  const audioRef = useRef();

  
  // audioRef.current.src = preview_url;
  // audioRef.current.autoplay = true;



  // useEffect(() => {
  //   playing ? audioRef.current.play() : audioRef.current.pause();
  // }, [playing]);

  const clickPlaying = () => {
    setPlaying(!playing); 
  }
  return (
      <PlayerContainer>
        <div className="icon">
        <div className="imgWrapper">
            <img className="play" src={playPic} width="40" height="40" alt="img"/>
          </div>
          <audio
            ref={audioRef}
          ></audio>
        </div>
        <div className="text">
          <h2 className="name"><i>{songName}</i> · {artist}</h2>
        </div>
        <div className="control">
          { playing ? 
            <i className="icon-mini iconfont icon-pause" onClick={e => clickPlaying(e, false)}>&#xe63b;</i>
            :
            <i className="icon-mini iconfont icon-play" onClick={e => clickPlaying(e, true)}>&#xe60a;</i> 
          }
        </div>
      </PlayerContainer>
  )
}

export default React.memo (Player);