import axios from 'axios';

export default {
    search: function(query) {
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NYT_API_KEY}`);
    }
};