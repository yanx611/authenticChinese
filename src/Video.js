import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DiscussionEmbed } from "disqus-react";
import "./App.css";
import "./Video.css";
import FooterInfo from "./FooterInfo";
import MenuEntry from "./MenuEntry";
import { Layout, Row, Col, Tag, Divider } from "antd";
import firebase from "./Firebase";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      tags: [],
      levels: []
    };
  }

  componentDidMount() {
    // fetch url data from database
    const db = firebase.firestore();
    db.collection("clips/")
      .doc(this.props.match.params.did)
      .get()
      .then(snapshot => {
        this.setState({
          info: snapshot.data(),
          tags: snapshot.data().tags,
          levels: snapshot.data().level
        });
      });
  }

  render() {
    // const myKey = "1";
    const info = this.state.info;
    const tags = this.state.tags;
    const levels = this.state.levels;

    const disqusShortname = "vdlproject";
    const pageTitle = info.chineseName+info.englishName+info.episode;
    const disqusConfig = {
      identifier: this.props.match.params.did,
      title: pageTitle
    };

    return (
      <div className="App">
        <Layout>
          <Header style={{ width: "100%" }}>
            <MenuEntry />
          </Header>
          <Content>
            <div>
              <Row style={{ margin: "40px" }}>
                <iframe
                  title="targetVideo"
                  width="720"
                  height="486"
                  src={info.embedUrl}
                />
              </Row>
              <Row>
                <Col span={12} offset={1}>
                  <p>
                    <strong>{info.chineseName}</strong> ({info.englishName}),
                    {info.episode}, {info.releaseYear}, <i>{info.genre}</i>
                  </p>
                  <Divider />
                  <p>
                    <strong>Level: </strong>
                    {levels.map(level => (
                      <Tag key={level}>{level}</Tag>
                    ))}
                  </p>
                  <p>
                    <strong>Tags: </strong>
                    {tags.map(tag => (
                      <Link to={"/view/" + tag}>
                        <Tag key={tag} color="blue">
                          {tag}
                        </Tag>
                      </Link>
                    ))}
                  </p>

                  <Divider />
                  <p>
                    <strong>About the clip: </strong>
                    {info.about}
                  </p>
                  <p>
                    <strong>About the series: </strong>
                    {info.description}
                  </p>
                  <Divider />
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={1}>
                  <div>
                    <DiscussionEmbed
                      shortname={disqusShortname}
                      config={disqusConfig}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer>
            <FooterInfo />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Video;
