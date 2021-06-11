import axios from 'axios';

const KEY = 'AIzaSyCaf4TvZbDurkOAU5J_5BViQnvdbNL4gjw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
