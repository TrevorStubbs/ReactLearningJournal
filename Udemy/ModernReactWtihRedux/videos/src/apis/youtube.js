import axios from 'axios';

const KEY = 'AIzaSyAlQ3OaCw4-FNfmaaijwpCVOsBc6qIrB1A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});