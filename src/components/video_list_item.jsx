import React from 'react';
import useStore from '../store';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;
  const selectVideo = useStore(({videoSlice}) => videoSlice.selectVideo);


  return (
    <li onClick={() => selectVideo(props.video)}
    // onMouseOver={() => {console.log('mouseOver!', props);}}
    >
      <img src={imgUrl} alt="video" />
      <div>{props.video.snippet.title}</div>
    </li>
    );
};

export default VideoListItem;