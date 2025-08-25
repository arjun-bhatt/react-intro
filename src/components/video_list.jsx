import React from 'react';
import VideoListItem from './video_list_item.jsx';
import useStore from '../store';

const VideoList = (props) => {
  const videos = useStore(({ videoSlice }) => (videoSlice.list));
  console.log(' in vdeo_list, videos from store', videos);
  const videoItems = videos.map((video) => { // so videoList gets videoS as props, then it goes through each and sends each videO as a prop to the videolistitem
    return <VideoListItem key={video.etag} video={video} />;});

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