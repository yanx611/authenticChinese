import React, { Component } from "react";
import { Row, List, Card } from "antd";
import { Link } from "react-router-dom";
import firebase from "./Firebase";

const textStyle = {
  margin: 20
};

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clips: []
    };
  }
  componentDidMount() {
    const db = firebase.firestore();
    if (this.props.keyword === "all") {
      db.collection("clips")
      .orderBy("chineseName", "asc")
        .get()
        .then(snapshot => {
          let clipCollection = [];
          snapshot.forEach(doc => {
            if (doc.data().englishName && doc.data().englishName !== "") {
              clipCollection.push(doc.data());
            }
          });
          this.setState({
            clips: clipCollection
          });
        });
    } else {
      // matching tags
      db.collection("clips")
        .where("tags", "array-contains", this.props.keyword)
        .get()
        .then(snapshot => {
          let clipCollection = [];
          snapshot.forEach(doc => {
            if (doc.data().englishName && doc.data().englishName !== "") {
              clipCollection.push(doc.data());
            }
          });
          this.setState({
            clips: clipCollection
          });
        });
    }
  }
  render() {
    const clips = this.state.clips;
    // console.log(clips);
    return (
      <div>
        <div style={textStyle}>Results for {this.props.keyword}: </div>
        <div style={textStyle}>
          {/* <VideoCard  /> */}
          <Row>
            <List
              grid={{ gutter: 16, column: 4 }}
              dataSource={clips}
              renderItem={item => (
                <List.Item>
                  <Link to={"/vd/" + item.id}>
                    <Card
                      title={item.englishName}
                      hoverable
                      style={{ width: 300 }}
                    >
                      <p>{"(" + item.type + ") " + item.episode}</p>
                    </Card>
                  </Link>
                </List.Item>
              )}
            />
          </Row>
        </div>
      </div>
    );
  }
}

export default VideoList;
