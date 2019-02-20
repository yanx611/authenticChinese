import React, { Component } from 'react';
import {Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

class VideoCard extends Component {
    // probably include info from video list, query from firebase 
    constructor(props) {
		super(props);
		this.state = {
            chineseName: "小爸爸",
            englishName: "Little Daddy",
            episode: "S1E05"
		}
    }

    render() {
        return(
            <div>
            <Card hoverable style={{width:240}} >
                <Meta title={this.state.englishName} description={this.state.episode} />
            </Card>
            </div>
        );
    }
}

export default VideoCard;