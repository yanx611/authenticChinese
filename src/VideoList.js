import React, { Component } from 'react';
import {Row, List, Card } from 'antd';
import { Link } from "react-router-dom";
import firebase from './Firebase';

const textStyle = {
    margin: 20,
  };
  

class VideoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clips: []
		}
	}
    componentDidMount() {
        const db = firebase.firestore();
		db.collection("clips")
		.get()
		.then(snapshot => {
			let clipCollection = [];
            snapshot.forEach(doc=>{
                clipCollection.push(doc.data());
            })
            this.setState({
                clips: clipCollection,
            });
            // console.log(clipCollection);
		})
    }
    render() {
        const clips = this.state.clips;
        // console.log(clips);
        return(
            <div>
                <div style={textStyle}>Results for {this.props.keyword}: </div>
                <div style={textStyle}>
                    {/* <VideoCard  /> */}
                    <Row>
                        <List grid={{gutter: 16, column: 4}} dataSource = {clips} renderItem={item=>(
                        <List.Item>
                            <Link to = {'/vd/' + item.id} >
                                <Card title={item.englishName} hoverable style={{width:300}} > 
                                    <p>{item.episode}</p>
                                </Card>
                            </Link>
                        </List.Item>
                        )} />
                    </Row>
                </div>
            </div>
        );
    }
}

export default VideoList;