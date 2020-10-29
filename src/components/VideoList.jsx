import React, { Component } from 'react';
import VideoItem from './VideoItem';
class VideoList extends Component {
    state = {  }

    render() {
      const videos = this.props.videos.map( (video) => {
            return (
                <VideoItem video = {video}/>
            )
            
       })
        return ( 
            <div 
            className = "ui relaxed divided list"> {videos} 
            </div>
         );
    }
}
 
export default VideoList;