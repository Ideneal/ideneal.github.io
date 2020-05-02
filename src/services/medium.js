import axios from 'axios';

class Medium {

    constructor(username) {
        this.username = username;
        this.url = `https://medium.com/feed/@${this.username.toLowerCase()}`;
    }

    getPosts() {
        return axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${this.url}`)
            .then(res => res.data)
            .then(json => json.items.filter(item => item.categories.length > 0));
    }
}

export default Medium;