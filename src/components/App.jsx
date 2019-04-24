import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      q: '',
      maxResults: 5,
      key: 'AIzaSyB7nE98Y9Lx4HOez5OfALDkifOULeAoues'
    };

    this.state = {
      //keep track of all the videos in the video list
      videoList: exampleVideoData,
      //current video in the video player
      currentVideo: exampleVideoData[0]
    };
  }

  renderAPIData(data) {
    this.setState({
      videoList: data.items,
      currentVideo: data.items[0]
    });
  }

  // searchYouTube(options, renderAPIData)

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
            <Search options={this.options} renderAPIData={this.renderAPIData} />
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

