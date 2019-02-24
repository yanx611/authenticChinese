import React, { Component } from 'react';
import firebase from './Firebase';
import pic from './pic.png';
import {Menu, Row, Col, List, Card } from 'antd';
import 'antd/dist/antd.css';
// import MenuItem from 'antd/lib/menu/MenuItem';

class TopicList extends Component {
    render() {
        return (
            <div>
                <List grid={{gutter: 16, column: 4}} dataSource = {topics} renderItem={item=>(
                    <List.Item>
                        <Card title={item}> Translation</Card>
                    </List.Item>
                )} />
            </div>
        )
    }
}

export default TopicList;