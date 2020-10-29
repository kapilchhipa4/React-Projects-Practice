import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
class App extends Component {

  state = {
    videos:[] 
  }
    onTermSubmit  = async (term) =>{
    // const response  = await axios.get('https://api.unsplash.com/search/photos',{
    //   params: {query: term  },
    //   headers :{
    //     Authorization:'Client-ID Vjl53T7wTqn5kiZ4v9xivCiFFP9reJPGM8yL_cdCOaY'
    //   }
    // });
    // this.setState({images:response.data.results})
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
        params : {
          part:'snippet',
          maxResults:5,
          key : 'AIzaSyDaHhacmLqZ65m4MmShQJosC4HcEXO-0To',
          q: term
        }
    })
    this.setState({videos:response.data.items})
    
  }
  render () {
        return (
          <div className = "ui container">
          <SearchBar onFormSubmit = {this.onTermSubmit}/>
          <VideoList videos = {this.state.videos}/>
          <VideoList videos = {this.state.videos}/>
          </div>
        )
  }
}

export default App;
