import React, { Component } from 'react';
import VideoCard from './videoCard';

const textStyle = {
    margin: 20,
  };
  

class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "KeyWord Example"
        }
    }
    render() {
        return(
            <div>
                <div style={textStyle}>Results for {this.state.keyword} </div>
                <div style={textStyle}>
                    <VideoCard />
                </div>
            </div>
        );
    }
}

export default VideoList;