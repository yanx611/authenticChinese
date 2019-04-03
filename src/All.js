import React, { Component } from "react";
import "./App.css";
import FooterInfo from "./FooterInfo";
import MenuEntry from "./MenuEntry";
import VideoList from "./VideoList";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

class All extends Component {
  componentDidMount() {
    document.title = "View - Chinese Video Clips Collection"
  }
  
  render() {
    const myKey = "3";
    return (
      <div className="App">
        <Layout>
          <Header style={{ width: "100%" }}>
            <MenuEntry mkey={myKey} />
          </Header>
          <Content>
            <VideoList keyword={this.props.match.params.keyword} type={""} />
          </Content>
          <Footer style={{ width: "100%" }}>
            <FooterInfo />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default All;
