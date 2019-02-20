import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import MenuItem from 'antd/lib/menu/MenuItem';

const { Header, Content, Footer } = Layout;

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			topics: ['Me', 'Family','Food', 'Time', 'Travel&Navigation', 'Daily Lives', 'Academics'],
		}
	}

	createTopics() {
		// create list of topics
	}

	render() {
		return (
			<div className="App">
			<Layout>
				<Header style={{ width: '100%' }}>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
						<Menu.Item key="1" disabled>Logo</Menu.Item>
						<Menu.Item key="2">Main</Menu.Item>
						<Menu.Item key="3">View All</Menu.Item>
					</Menu>
				</Header>
				<Content>
					<div>
						<Row>
							<Col>Info Pictures </Col>
						</Row>
						<Row>
							{/* connect to firebase, dynamically list the items */}
							<Menu theme="light" mode="horizontal" defaultSelectedKeys={['6']} style={{ lineHeight: '64px' }}>
								<Menu.Item key="1">A1</Menu.Item>
								<Menu.Item key="2">A2</Menu.Item>
								<Menu.Item key="3">B1</Menu.Item>
								<Menu.Item key="4">B2</Menu.Item>
								<Menu.Item key="5">C1</Menu.Item>
								<Menu.Item key="6">C2</Menu.Item>
							</Menu>
						</Row>
						<Row>
							
						</Row>
					</div>
				</Content>
				<Footer>
					<div>
						<Row gutter={24}>
							<Col className="gutter-row" span={12}>
								<div className="gutter-box">
									<h3>About</h3> 
									<small>The website provides multiple types of videos that related to Chinese learning topics in Rensselaer Polytechnic Institute. The website encourage the student to learn from the video and explore the original series. </small>
								</div>
								<Divider type="vertical" />
							</Col>
							<Col className="gutter-row" span={12}>
								<div className="gutter-box">
									<h3>Contact</h3>
									<p><small><a href="#">Github</a></small></p>
									<p><small><a href="mailto:yanx3@rpi.edu" target="_top">Contact the development team</a></small></p>
									<p><small><a href="mailto:yanx3@rpi.edu" target="_top">Contact Professor </a></small></p>
								</div>
								<Divider type="vertical" />
							</Col>
							{/* <Col className="gutter-row" span={6}>
								<div className="gutter-box">
									<h3>Resource</h3>
									<small></small>
								</div>
							</Col> */}
						</Row>
					</div>
				</Footer>
			</Layout>
			</div>
		);
    }
}

export default App;
