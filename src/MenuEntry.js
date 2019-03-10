import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Menu} from 'antd';
import 'antd/dist/antd.css';

class MenuEntry extends Component {

    // file stores menu entry
    
    render(){
        return(
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[this.props.mkey]}  style={{ lineHeight: '64px' }}>
                <Menu.Item key="1" disabled>Project X</Menu.Item>
                <Menu.Item key="2"><Link to="/">Main</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/view/all">View All</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/createNew">Create</Link></Menu.Item>
            </Menu>
        )
    }
}

export default MenuEntry;