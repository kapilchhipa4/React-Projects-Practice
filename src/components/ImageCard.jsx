import React, { Component } from 'react';

class ImageCard extends Component {
    state = {  }

    constructor(props){
        super(props)

        this.imageRef = React.createRef()

    }
    componentDidMount(){
        console.log(this.imageRef)
    }
    render() { 
        const {description, urls } = this.props.image
        return(
        
            <img 
            alt = {description} 
            src = {urls.regular}
            ref = {this.imageRef}
            style = {{height:200, width:200}}
            />
       
        )
    }
}
 
export default ImageCard;