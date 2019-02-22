import React, { Component } from 'react';
import './App.css';
import firebase from './Firebase';
import Home from './Home';
import FooterInfo from './FooterInfo';
import MenuEntry from './MenuEntry';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
	// componentDidMount() {
		// const datRef = firebase.database().ref('clips');
		// const db = firebase.firestore();
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
	// }
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
