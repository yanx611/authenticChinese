import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./Firebase";
import pic from "./pic.jpg";
import { Menu, Row, Col, List, Card } from "antd";
import "antd/dist/antd.css";

// Homepage component, render topics and textbooks

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: [["Default"]],
      level: ["Default"],
      showingMenu: 0
    };
  }
  componentDidMount() {
    // fetch data from firebase store in local state
    document.title = "Project Authentic Chinese";
    const db = firebase.firestore();
    db.collection("levels")
      .get()
      .then(snapshot => {
        let levels = [];
        let units = [];
        snapshot.forEach(doc => {
          levels.push(doc.data().levelNum);
          units.push(doc.data().topics);
        });
        this.setState({
          level: levels,
          unit: units
        });
        console.log(units);
      });
  }

  handleMenuClick(e) {
    // change views for tabs of submenu
    this.setState({
      showingMenu: e.key
    });
  }


  render() {
    // render data of submenu and their topics
    const unit = this.state.unit;
    const level = this.state.level;
    return (
      <div>
        <Row>
          <Col>
            <img src={pic} alt="indexPic" style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row>
          {/* connect to firebase, dynamically list the items */}
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            style={{ lineHeight: "64px" }}
          >
            {level.map((item, i) => (
              <Menu.Item key={i} onClick={this.handleMenuClick.bind(this)}>
                {item}
              </Menu.Item>
            ))}
          </Menu>
        </Row>
        <Row>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={unit[this.state.showingMenu]}
            renderItem={item => (
              <List.Item>
                <Link to={"/view/" + item.english}>
                  <Card title={item.english}> {item.chinese}</Card>
                </Link>
              </List.Item>
            )}
          />
        </Row>
      </div>
    );
  }
}

export default Home;
