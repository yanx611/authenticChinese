import React, { Component } from "react";
import { Link } from "react-router-dom";
import FooterInfo from "./FooterInfo";
import MenuEntry from "./MenuEntry";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

class Notfound extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header style={{ width: "100%" }}>
            <MenuEntry />
          </Header>
          <Content style={{ textAlign: "center", padding: "20px" }}>
            <h1>Sorry, the page is running away</h1>
            <p>
              Go back to the <Link to="/">main page</Link>{" "}
            </p>
          </Content>
          <Footer>
            <FooterInfo />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Notfound;
