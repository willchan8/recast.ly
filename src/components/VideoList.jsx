import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">

    {props.videos.map(video =>
      <VideoListEntry video={video} />
    )}

  </div>
);


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

//On a click event
  //pass the specific video to video player
    //video player will display the video and info

//videoList will pass the remaining videos to videoListEntry
//every time you click a new video list entry
  //VideoList will pass the video to VideoPlayer (see above)
  //VideoList will rerender the video list entries in VideoList