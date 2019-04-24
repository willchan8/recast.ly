// import App from '../src/App.js'

var searchYouTube = (options, callback) => {
  var dataInfo = {
    q: options.query,
    maxResults: options.max,
    key: options.key,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: dataInfo,
    dataType: 'json',
    success: callback(data) || function () {
      console.log('Get request successful');
    }
  });
};

export default searchYouTube;