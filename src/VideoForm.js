import React, { Component } from "react";
import { Form, Icon, Input, Button, Layout, Select } from "antd";
import "./App.css";
import FooterInfo from "./FooterInfo";
import MenuEntry from "./MenuEntry";
import "./VideoForm.css";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

class VideoForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    const myKey = "4";

    return (
      <div className="App">
        <Layout>
          <Header>
            <MenuEntry mkey={myKey} />
          </Header>
          <Content>
            <Form
              {...formItemLayout}
              onSubmit={this.handleSubmit}
              className="add-form"
            >
              <h2>Upload new available video</h2>
              <Form.Item>
                {getFieldDecorator("englishName", {
                  rules: [{ required: true, message: "Please input the title" }]
                })(
                  <Input
                    prefix={
                      <Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="Video Title in English"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("chineseName", {
                  rules: [{ required: true, message: "Please input the title" }]
                })(
                  <Input
                    prefix={
                      <Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="Video Title in Chinese"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("description", {
                  rules: [
                    { required: true, message: "Please enter the description" }
                  ]
                })(<Input.TextArea placeholder="Video description" rows="2" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("embedUrl", {
                  rules: [
                    {
                      required: true,
                      message: "Please input the url from Youtube"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="caret-right" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="Youtube url"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("episode", {
                  rules: [
                    { required: true, message: "Please input the episode" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="ordered-list" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="Episode of the video e.g. S1E01"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("genre", {
                  rules: [
                    { required: true, message: "Please input the episode" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="project" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="The genre of the video"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("level", {
                  rules: [
                    {
                      required: true,
                      message: "Please select corresponding levels",
                      type: "array"
                    }
                  ]
                })(
                  <Select
                    prefix={
                      <Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    mode="multiple"
                    placeholder="Please select corresponding levels"
                  >
                    <Option value="1A">1A</Option>
                    <Option value="1B">1B</Option>
                    <Option value="2A">2A</Option>
                    <Option value="2A">2B</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("tags", {
                  rules: [
                    {
                      required: true,
                      message: "Please select corresponding tags",
                      type: "array"
                    }
                  ]
                })(
                  <Select
                    prefix={
                      <Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    mode="multiple"
                    placeholder="Please select corresponding tags"
                  >
                    <Option value="me">me</Option>
                    <Option value="home">home</Option>
                    <Option value="food">food</Option>
                    <Option value="time">time</Option>
                    <Option value="dailylives">Daily Lives</Option>
                    <Option value="shopping">Shopping</Option>
                    <Option value="travel&navigation">Travel&Navigation</Option>
                    <Option value="academics">Academics</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("releaseYear", {
                  rules: [
                    { required: false, message: "Please input the episode" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="pushpin" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="Release Year of the video"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("type", {
                  rules: [
                    { required: true, message: "Please input the episode" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="tag" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    placeholder="Type of the video"
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

export default Form.create()(VideoForm);
