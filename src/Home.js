import React, { Component } from 'react';
import firebase from './Firebase';
import pic from './pic.png';
import {Menu, Row, Col, List, Card } from 'antd';
import 'antd/dist/antd.css';
// import MenuItem from 'antd/lib/menu/MenuItem';

class Home extends Component {
    constructor(props) {
		super(props);
		this.state = {
            levels: [],
			topics: ['Me', 'Family','Food', 'Time', 'Travel&Navigation', 'Daily Lives', 'Academics'],
		}
    }
	componentDidMount() {
		// const datRef = firebase.database().ref('clips');
		const db = firebase.firestore();
		// db.collection("clips").where("chineseName", "==", "小爸爸")
		// .get()
		// .then(snap=>{
		// 	snap.forEach(doc=>{
		// 		console.log(doc.data());
		// 	})
		// });

		// if without constriants
		// db.collection("clips")
		// .get()
		// .then(snap=>{
		// 	snap.forEach(doc=>{
		// 		console.log(doc.data());
		// 	})
        // });
        
        db.collection("levels")
        .get()
        .then(snapshot => {
            const arr = [];
            snapshot.forEach(doc=>{
                arr.push(doc.data().levelNum);
                // console.log(doc.data().levelNum);
            })
            // console.log(arr);
            this.setState({
                levels: arr.sort(),
            });
            console.log(this.state.levels);
        })

        
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
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={[this.state.levels.length.toString()]} style={{ lineHeight: '64px' }}>
                    {/* <Menu.Item key="1">A1</Menu.Item>
                    <Menu.Item key="2">A2</Menu.Item>
                    <Menu.Item key="3">B1</Menu.Item>
                    <Menu.Item key="4">B2</Menu.Item>
                    <Menu.Item key="5">C1</Menu.Item>
                    <Menu.Item key="6">C2</Menu.Item> */}
                    {this.state.levels.map((item,i)=><Menu.Item key={i}>{item}</Menu.Item>)}
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