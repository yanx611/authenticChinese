import React, { Component } from 'react';
import './App.css';
import FooterInfo from './FooterInfo';
import MenuEntry from './MenuEntry';
import { Layout } from 'antd';
import firebase from './Firebase';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
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
            });
		})
    }

	render() {
        const myKey = "1";
        const info =  this.state.info;
		return (
			<div className="App">
			<Layout>
				<Header style={{ width: '100%' }}>
					<MenuEntry mkey = {myKey}  />
				</Header>
				<Content>
					{/* shows the embeded  video */}
                    <iframe title = "targetVideo" width="780" height="450" src= {info.embedUrl} ></iframe>
                    <p><strong>{info.chineseName}</strong> {info.englishName} {info.episode}</p>
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