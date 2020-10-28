import React, { Component } from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends Component {

  state = {
    images:[] 
  }
    onSearchSubmit  = async (term) =>{
    const response  = await axios.get('https://api.unsplash.com/search/photos',{
      params: {query: term  },
      headers :{
        Authorization:'Client-ID Vjl53T7wTqn5kiZ4v9xivCiFFP9reJPGM8yL_cdCOaY'
      }
    });
    this.setState({images:response.data.results})
    
  }
  render () {
        return (
          <div className = "ui container">
          <SearchBar onSubmit = {this.onSearchSubmit}/>
          <ImageList images = {this.state.images}/>
          </div>
        )
  }
}

export default App;
