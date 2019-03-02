import React, { Component } from 'react';
import './App.css';
import FooterInfo from './FooterInfo';
import MenuEntry from './MenuEntry';
import VideoList from './VideoList';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link : "https://www.youtube.com/embed/R-s5WEWZIJw?start=2170&end=2190"
        }
    }
	render() {
		const myKey = "3";
		return (
			<div className="App">
			<Layout>
				<Header style={{ width: '100%' }}>
					<MenuEntry mkey = {myKey}  />
				</Header>
				<Content>
					{/* shows the embeded  video */}
                    <iframe title = "targetVideo" width="780" height="450" src="https://www.youtube.com/embed/R-s5WEWZIJw?start=2170&end=2190" frameborder="0"  allowfullscreen></iframe>
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