import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import FooterInfo from "./FooterInfo";
import MenuEntry from "./MenuEntry";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    const myKey = "2";
    return (
      <div className="App">
        <Layout>
          <Header style={{ width: "100%" }}>
            <MenuEntry mkey={myKey} />
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
