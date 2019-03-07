import React, { Component } from 'react';
import './App.css';
import FooterInfo from './FooterInfo';
import MenuEntry from './MenuEntry';
import { Layout, Row, Col, Tag } from 'antd';
import firebase from './Firebase';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            tags: [],
        }
    }

    componentDidMount() {
        // fetch url data from database 
		const db = firebase.firestore();
		db.collection("clips/").doc(this.props.match.params.did)
		.get()
		.then(snapshot => {
            this.setState({
                info: snapshot.data(),
                tags: snapshot.data().tags
            });
		})
    }

	render() {
        // const myKey = "1";
        const info =  this.state.info;
        const tags = this.state.tags;
		return (
			<div className="App">
			<Layout>
				<Header style={{ width: '100%' }}>
					<MenuEntry />
				</Header>
				<Content style={{margin: '40'}}>
                    <div>
                        <Row>
                            <Col span={12} offset={1}>
                                <iframe title = "targetVideo" width="720" height="486" src= {info.embedUrl} ></iframe>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col span={12} offset={1}>
                                <div><strong>{info.chineseName}</strong> ({info.englishName}) 
                                {info.episode} {info.releaseYear}</div>
                                <div><strong>Level: </strong>{info.level}</div>
                                <div><strong>Tag: </strong> {tags.map(tag=><Tag>{tag}</Tag>)}</div>
                                <div><strong>Description:</strong>{info.description}</div>
                            </Col>
                            
                        </Row>
                    </div>
					{/* shows the embeded  video */}
				</Content>
				<Footer>
					<FooterInfo />
				</Footer>
			</Layout>
			</div>
		);
    }
}

export default Video; 