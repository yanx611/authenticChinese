import React, { Component } from "react";
import FooterInfo from "./FooterInfo";
import MenuEntry from "./MenuEntry";
import { Form, Icon, Input, Button, Layout, Select, Divider } from "antd";
import "antd/dist/antd.css";
import "./Login.css";

const { Header, Content, Footer } = Layout;

class Login extends Component {
    
  render() {
    const { getFieldDecorator } = this.props.form;
    const myKey = "5";
    return (
      <div className="App">
        <Layout>
          <Header style={{ width: "100%" }}>
            <MenuEntry mkey={myKey} />
          </Header>
          <Content>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Divider>Login</Divider>
                <Form.Item>
                    {getFieldDecorator("username", {
                    rules: [{ required: true, message: "Please enter valid username" }]
                    })(
                    <Input
                        prefix={
                        <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                        }
                        type="text"
                        placeholder="Username"
                    />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("password", {
                    rules: [{ required: true, message: "Please enter valid password" }]
                    })(
                    <Input
                        prefix={
                        <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                        }
                        type="password"
                        placeholder="password"
                    />
                    )}
                </Form.Item>
                <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="add-video-button"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Content>
          <Footer>
            <FooterInfo />
          </Footer>
        </Layout>
      </div>
    );
  }
}
export default Form.create()(Login);
