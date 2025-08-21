import React from 'react';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => props.onVideoSelect(props.video)} 
    // onMouseOver={() => {console.log('mouseOver!', props);}}
    >
      <img src={imgUrl} alt="video" />
      <div>{props.video.snippet.title}</div>
    </li>
    );
};

export default VideoListItem;