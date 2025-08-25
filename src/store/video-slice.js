export default function createVideoSlice(set) {
  return {
    selected: null,
    list: [],
    selectVideo: (video) => set(({ videoSlice: draftState }) => { 
		    draftState.selected = video; 
	    }, false, 'video/selectVideo'),
    setVideos: (videos) => set(({ videoSlice: draftState }) => {
      draftState.selected = videos[0];
      draftState.list = videos;
    }, false, 'video/setVideos'),
  };
}