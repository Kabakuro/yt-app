import axios from 'axios';

const KEY = 'AIzaSyChCrYw4kIM3vhFO7u7wPgakF5riMW00ZU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
