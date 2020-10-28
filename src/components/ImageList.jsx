import React, { Component } from 'react';
import './ImageList.css'
import ImageCard from './ImageCard';
class ImageList extends Component {
    state = {  }

    render() {
      const images = this.props.images.map( (img) => {
            return <ImageCard
            image = {img}
            key = {img.id}
            /> 
       })
        return ( 
            <div className = "image-list"> {images} </div>
         );
    }
}
 
export default ImageList;