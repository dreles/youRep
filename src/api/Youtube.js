import axios from 'axios';

const KEY = 'AIzaSyCjw6-DENp07_mpYjPdLtWAX6DCtAYQSOw' 

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: '5',
		key: KEY,
		  
	}
})