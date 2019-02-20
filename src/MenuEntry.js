import React, { Component } from 'react';
import pic from './pic.jpg';
import {Menu, Row, Col, List, Card } from 'antd';
import 'antd/dist/antd.css';

class MenuEntry extends Component {
    render(){
        return(
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
                <Menu.Item key="1" disabled>Project X</Menu.Item>
                <Menu.Item key="2">Main</Menu.Item>
                <Menu.Item key="3">View All</Menu.Item>
            </Menu>
        )
    }
}

export default MenuEntry;