import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //keep track of all the videos in the video list
      videoList: this.props.videos,
      //current video in the video player
      currentVideo: this.props.videos[0]
    };
  }


  //click event on video list entry title
  //class ="video-list-entry-title"
  //display the clicked video in the video player

  //onClick function ()
  //which sets the state of the videoList and currentVideo


  //Need to Know:
  //how to get the index of the clicked video
  //Where to pass the onClick function

  handleClick() {
    console.log('VideoListEntry Clicked');
    //change the state of videoList and currentVideo(videoPlayer)
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//adding a comment for babel
export default App;

//click event on video list entry title
  //class ="video-list-entry-title"
//display the clicked video in the video player

//onClick function ()
  //which sets the state of the videoList and currentVideo
//how to get the index of the clicked video
