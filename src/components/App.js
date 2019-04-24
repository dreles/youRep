import React from 'react';
import MainDisplay from './MainDisplay'
import VideoList from './VideoList'
import SearchBar from './SearchBar'
import Youtube from '../api/Youtube.js'

class App extends React.Component {

  state = {videos: [], selectedVideo: {}} 

  componentDidMount() {
    this.getText('best')
  }

  getText = (txt) => {
    Youtube.get('/search', {
      params: {
        q: txt
      }

    }).then((response) => {
      this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }); 
  }
  
  videoSelect = (video) => { 
    
    this.setState({selectedVideo: video})
  
  }

  render() {
    return (
      <div className="App">

        <div className="ui container">
          <SearchBar textInput={this.getText}/>
          <div className='ui grid'>
            <div className='ui row'>
            <div className='eleven wide column'>
              <MainDisplay  video={this.state.selectedVideo}/> 
            </div>
            <div className='five wide column'>
              <VideoList selectedVideo={this.videoSelect} videos={this.state.videos}/>
            </div>
              
              
            </div>
          </div>
         
        </div>
       
         

      </div>
    );
  }


}

export default App
