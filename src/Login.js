import React, { Component } from "react";
import firebase, { auth, provider } from "./Firebase";
import FooterInfo from "./FooterInfo";
import MenuEntry from "./MenuEntry";
import { Form, Icon, Input, Button, Layout, Divider } from "antd";
import "antd/dist/antd.css";
import "./Login.css";

const { Header, Content, Footer } = Layout;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // sign in
        console.log("Received values of form: ", values);
        firebase
          .auth()
          .signInWithEmailAndPassword(values.email, values.password)
          .then(data => {
            console.log(data);
            // redirect to homepage
          })
          .catch(err => {
            // Handle Errors here.
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorCode + errorMessage);
          });
      }
    });
  };

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
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please enter valid email" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="Email"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please enter valid password" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
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
