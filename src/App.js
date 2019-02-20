import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import FooterInfo from './FooterInfo';
import MenuEntry from './MenuEntry';
import { Layout, Menu, Row, Col, Divider, List, Card } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
	render() {
		return (
			<div className="App">
			<Layout>
				<Header style={{ width: '100%' }}>
					<MenuEntry />
				</Header>
				<Content>
					<Home />
				</Content>
				<Footer>
					<FooterInfo />
				</Footer>
			</Layout>
			</div>
		);
    }
}

export default App;
