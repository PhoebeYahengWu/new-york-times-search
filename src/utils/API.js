import axios from 'axios';

export default {
    getUser: (query) =>
        axios({
            'method': 'GET',
            'url': 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&api-key=' + apiKey,
            'headers': {
                'content-type': 'application/json'
            }
        })
    }