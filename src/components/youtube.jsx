import React from 'react';
import youtubeSearch from '../services/youtube-api.js';
import { useEffect } from 'react';

// import our new SearchBar componenbt
import SearchBar from './search_bar.jsx';
import VideoList from './video_list.jsx';
import VideoDetail from './video_detail.jsx';

import useStore from '../store';


// import debounce from 'lodash.debounce';

function Youtube(props) {

// const [videos, setVideos] = useState([]);
// const [selectedVideo, setSelected] = useState(null);

  const setVideos = useStore(({ videoSlice }) => (videoSlice.setVideos));


const search = (text) => {
    youtubeSearch(text).then((result) => {
      setVideos(result);
      console.log(result);
    });
  };

// const debouncedSearch = useCallback(debounce(search, 500), []);

useEffect(() => {
    search('pixar');
  }, [] // this empty array specifies that there is no variable that should produce a rerender
  // thus, without this, you get stuck in a re-rendering loop
  // and with this, you search for pixar, you update the state, you check the list - is this a reason I should rerender?
  // and because there's no reason to re-render, you don't update the state
);

  return (
    <div>
      <SearchBar onSearchChange={search}/>
      <div id="video-section">
      <VideoDetail />
      <VideoList />
        </div>
    </div>
  );
};

export default Youtube;