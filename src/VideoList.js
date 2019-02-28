import React, { Component } from 'react';
import VideoCard from './videoCard';

const textStyle = {
    margin: 20,
  };
  

class VideoList extends Component {
    render() {
        return(
            <div>
                <div style={textStyle}>Results for {this.props.keyword}: </div>
                <div style={textStyle}>
                    <VideoCard />
                </div>
            </div>
        );
    }
}

export default VideoList;