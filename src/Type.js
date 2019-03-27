import React, { Component } from "react";
import "./App.css";
import FooterInfo from "./FooterInfo";
import MenuEntry from "./MenuEntry";
import VideoList from "./VideoList";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

class Type extends Component {
  componentDidMount() {
    document.title = "Category - Chinese Video Clips Collection"
  }
  render() {
    const myKey = "sub1";
    return (
      <div className="App">
        <Layout>
          <Header style={{ width: "100%" }}>
            <MenuEntry mkey={myKey} />
          </Header>
          <Content>
            <VideoList type={this.props.match.params.type} keyword=""/>
          </Content>
          <Footer style={{ width: "100%" }}>
            <FooterInfo />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Type;
