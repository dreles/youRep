import React from 'react';
import './VideoItem.css'

const VideoItem = ({video, selectedVideo}) => { 

console.log(video)
return (
	<div onClick={() => selectedVideo(video)} className='video-item item'>
		<img className='ui image' src={video.snippet.thumbnails.medium.url} alt="could not be displayed"/>
		<div className='content'><div className='header'>{video.snippet.title}</div></div>
	</div>
);

}

export default VideoItem