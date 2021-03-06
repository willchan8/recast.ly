import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //keep track of all the videos in the video list
      videoList: exampleVideoData,
      //current video in the video player
      currentVideo: exampleVideoData[0],
      //default query search term
      query: 'Cute cat videos'
    };

    this.liveSearch = _.debounce(this.getYouTubeVideos, 500);
  }

  componentDidMount() {
    this.getYouTubeVideos();
  }

  getYouTubeVideos() {
    var options = {
      key: YOUTUBE_API_KEY,
      query: this.state.query,
      max: 5
    };

    this.props.searchYouTube(options, (data) => {
      this.setState({
        videos: data,
        currentVideo: data[0],
      });
    });
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });

    this.liveSearch();
  }

  handleSubmit() {
    this.getYouTubeVideos();
  }

  renderVideosOnClick(video) {
    this.setState({
      currentVideo: video
    });
  }


  // Call searchYoutube, returns an array of objects with youtube video info


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} /> 
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} clickVideoTitle={this.renderVideosOnClick.bind(this)} />
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

