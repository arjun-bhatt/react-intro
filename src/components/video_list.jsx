import React from 'react';
import VideoListItem from './video_list_item.jsx';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => { // so videoList gets videoS as props, then it goes through each and sends each videO as a prop to the videolistitem
    return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect} />;});

    if (!videoItems){
        return(<p>videoList loading!</p>);
    }

  return (
    <ul>
       {videoItems}
    </ul>
  );
};

export default VideoList;