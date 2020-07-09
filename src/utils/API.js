import axios from 'axios';

export default {
    getUser: (query) =>
        axios({
            'method': 'GET',
            'url': `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NYT_API_KEY}`,
            'headers': {
                'content-type': 'application/json'
            }
        })
    }