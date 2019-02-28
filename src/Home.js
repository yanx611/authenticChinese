import React, { Component } from 'react';
import firebase from './Firebase';
import pic from './pic.png';
import {Menu, Row, Col, List, Card } from 'antd';
import 'antd/dist/antd.css';

class Home extends Component {
    constructor(props) {
		super(props);
		this.state = {
            // indices: {},
            // topics: ['Me', 'Family','Food', 'Time', 'Travel&Navigation', 'Daily Lives', 'Academics'],
            unit : [["Default"]],
            // levels: ["A1", "A2"]
            level : ["Default"],
            showingMenu: 0
		}
    }
	componentDidMount() {
		const db = firebase.firestore();
        db.collection("levels")
        .get()
        .then(snapshot => {
            let levels = [];
            let units = [];
            snapshot.forEach(doc=>{
                levels.push(doc.data().levelNum);
                units.push(doc.data().topics);
            })
            this.setState({
                level: levels,
                unit: units
            });
            console.log(units);
        })
    }
    
    handleMenuClick(e) {
        this.setState({
            showingMenu: e.key,
        });
    }
    render() {
        const unit = this.state.unit;
        const level = this.state.level;
        return (
            <div>
            <Row>
                <Col><img src={pic} alt="indexPic" style={{width:'100%'}} /></Col>
            </Row>
            <Row>
                {/* connect to firebase, dynamically list the items */}
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={["0"]} style={{ lineHeight: '64px' }}>
                    {level.map(
                        (item,i) => <Menu.Item key={i} onClick={this.handleMenuClick.bind(this)}>{item}</Menu.Item>
                    )}
                </Menu>
            </Row>
            <Row>
                <List grid={{gutter: 16, column: 4}} dataSource = {unit[this.state.showingMenu]} renderItem={item=>(
                    <List.Item>
                        <Card title={item.english}> {item.chinese}</Card>
                    </List.Item>
                )} />
            </Row>
        </div>
        )
    }
}

export default Home;