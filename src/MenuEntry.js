import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Menu} from 'antd';
import 'antd/dist/antd.css';

class MenuEntry extends Component {
    render(){
        return(
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
                <Menu.Item key="1" disabled>Project X</Menu.Item>
                {/* <Menu.Item key="2">Main</Menu.Item> */}
                <Menu.Item key="2"><Link to="/">Main</Link></Menu.Item>
                {/* <Menu.Item key="3">View All</Menu.Item> */}
                <Menu.Item key="3"><Link to="/viewAll">View All</Link></Menu.Item>
            </Menu>
        )
    }
}

export default MenuEntry;