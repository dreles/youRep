import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, selectedVideo}) => {


	const videoList = videos.map((vid) => <VideoItem selectedVideo={selectedVideo} video={vid} key={vid.etag}/> )

	return (
    		<div className='ui right aligned divided list'>{videoList}</div>
	)

}


    
    	
  
 

export default VideoList