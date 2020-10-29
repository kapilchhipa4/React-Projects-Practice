import React, { Component } from 'react';
import styles from './VideoItem.css'
const VideoItem = ({video}) => {

    const s = `item ${styles.videoitem}`
    return ( 
        <div className = {s} >
            <img src = {video.snippet.thumbnails.medium.url }
            alt = "not"
            className = "ui image"/>
            <div className="content">
            <div className="header">
                {video.snippet.title}
            </div>
            </div>
        </div>
     );
}
 
export default VideoItem;