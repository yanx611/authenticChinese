import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, Layout, Select } from "antd";
import firebase from "./Firebase";
import "./App.css";
import FooterInfo from "./FooterInfo";
import MenuEntry from "./MenuEntry";
import "./VideoForm.css";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

class VideoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: [],
      unit: {},
      topics: [],
      type: [],
      redirect: false,
      login: true
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const db = firebase.firestore();
        db.collection("clips")
          .add(values)
          .then(ref => {
            console.log("Added document with ID: ", ref.id);
            db.collection("clips")
              .doc(ref.id)
              .set(
                {
                  id: ref.id
                },
                { merge: true }
              );
          })
          .then(
            this.setState({
              redirect: true
            })
          );
      }
    });
  };

  levelOnchange(val) {
    let choices = [];
    for (let i = 0; i < val.length; ++i) {
      choices = choices.concat(this.state.unit[val[i]]);
    }
    this.setState({
      topics: choices
    });
  }

  componentDidMount() {
    document.title = "Create - Project Authentic Chinese";
    let user = firebase.auth().currentUser;
    if (user) {
      this.setState({
        login: true
      });
    } else {
      this.setState({
        login: false
      });
    }
    const db = firebase.firestore();
    db.collection("levels")
      .get()
      .then(snapshot => {
        let levels = [];
        let units = {};
        snapshot.forEach(doc => {
          levels.push(doc.data().levelNum);
          units[doc.data().levelNum] = doc.data().topics;
        });
        this.setState({
          level: levels,
          unit: units
        });
      });
    db.collection("category")
      .get()
      .then(snapshot => {
        let ty = [];
        snapshot.forEach(doc => {
          ty = ty.concat(doc.data().list);
        });
        this.setState({
          type: ty
        });
      });
  }

  render() {
    if (this.state.login === false) {
      return <Redirect to="/" />;
    }
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelcol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrappercol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    const myKey = "4";
    const level = this.state.level;
    const redirect = this.state.redirect;
    if (redirect === true) {
      return <Redirect to="/" />;
    }

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
                    {
                      required: true,
                      message: "Please enter the description of the series"
                    }
                  ]
                })(
                  <Input.TextArea
                    placeholder="The description of the series"
                    rows="2"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("about", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter the information about the clip"
                    }
                  ]
                })(
                  <Input.TextArea
                    placeholder="The information about the clip"
                    rows="2"
                  />
                )}
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
                      <Icon
                        type="caret-right"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    type="text"
                    placeholder="Youtube url"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("imageUrl", {
                  rules: [
                    {
                      required: true,
                      message: "Please input the url of the thumbnail"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon
                        type="pic-right"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    type="text"
                    placeholder="Thumbnail url"
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
                      <Icon
                        type="ordered-list"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
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
                      <Icon
                        type="project"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
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
                    onChange={this.levelOnchange.bind(this)}
                  >
                    {level.map(item => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
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
                    {this.state.topics.map(item => (
                      <Option key={item.english} value={item.english}>
                        {item.english}
                      </Option>
                    ))}
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
                      <Icon
                        type="pushpin"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    type="text"
                    placeholder="Release Year of the video"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("type", {
                  rules: [
                    {
                      required: true,
                      message: "Please select corresponding type"
                    }
                  ]
                })(
                  <Select
                    defaultValue="tvshow"
                    placeholder="Please select the type of the video"
                  >
                    {this.state.type.map(item => (
                      <Option key={item.value} value={item.value}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>
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
