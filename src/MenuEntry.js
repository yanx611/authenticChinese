import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./Firebase";
import { Menu } from "antd";
import "antd/dist/antd.css";
// import SubMenu from "antd/lib/menu/SubMenu";

const SubMenu = Menu.SubMenu;

class MenuEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }
  // file stores menu entry

  componentDidMount() {
    // check user
    let user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      console.log("user logged in");
      this.setState({
        login: true
      });
    }
  }
  handleLogout(e) {
    // change views for tabs of submenu
    firebase.auth().signOut();
    window.location.reload();
  }

  render() {
    if (this.state.login === false) {
      return (
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[this.props.mkey]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1" disabled>
            Project X
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">Main</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/view/all">View All</Link>
          </Menu.Item>
          {/* <Menu.Item key="4">
            <Link to="/createNew">Create</Link>
          </Menu.Item> */}
          <Menu.Item key="5" style={{ float: "right" }}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <SubMenu key="sub1" title={"Category"}>
            <Menu.Item key="7">
              <Link to="/c/animation">Animation</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/c/gameshow">Game Show</Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/c/movie">Movie</Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="/c/tvshow">TV Show</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      );
    } else {
      return (
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[this.props.mkey]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1" disabled>
            Project X
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">Main</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/view/all">View All</Link>
          </Menu.Item>
          <Menu.Item
            key="5"
            style={{ float: "right" }}
            onClick={this.handleLogout.bind(this)}
          >
            Admin Logout
          </Menu.Item>
          <SubMenu key="sub1" title={"Category"}>
            <Menu.Item key="7">
              <Link to="/c/animation">Animation</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/c/gameshow">Game Show</Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/c/movie">Movie</Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="/c/tvshow">TV Show</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="4">
            <Link to="/createNew">Create</Link>
          </Menu.Item>
        </Menu>
      );
    }
  }
}

export default MenuEntry;
