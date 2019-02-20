import React, { Component } from 'react';
import pic from './pic.jpg';
import {Menu, Row, Col, List, Card } from 'antd';
import 'antd/dist/antd.css';

class Home extends Component {
    constructor(props) {
		super(props);
		this.state = {
			topics: ['Me', 'Family','Food', 'Time', 'Travel&Navigation', 'Daily Lives', 'Academics'],
		}
	}
    render() {
        const topics = this.state.topics;
        return (
            <div>
            <Row>
                <Col><img src={pic} alt="indexPic" style={{width:'100%'}} /></Col>
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
                <List grid={{gutter: 16, column: 4}} dataSource = {topics} renderItem={item=>(
                    <List.Item>
                        <Card title={item}> Translation</Card>
                    </List.Item>
                )} />
            </Row>
        </div>
        )
    }
}

export default Home;