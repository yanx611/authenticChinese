import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import "antd/dist/antd.css";

// component store footer information

class FooterInfo extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col offset={1} span={11}>
            <div className="gutter-box">
              <h3>Project X</h3>
              Project X provides a collection of related educational video clips
              related to topics in Chinese textbooks used in Rensselaer
              Polytechnic Institute.
            </div>
          </Col>
          <Col offset={1} span={5}>
            <div className="gutter-box">
              <h3>Contact</h3>
              <p>
                <Icon type="github" />
                <a
                  href="https://github.com/yanx611/videoLearning"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Github
                </a>
              </p>
              <p>
                <Icon type="mail" />
                <a href="mailto:xxx@rpi.edu" target="_top">
                  {" "}
                  Developer
                </a>
              </p>
              <p>
                <Icon type="user" />

                <a href="mailto:zhouy12@rpi.edu" target="_top">
                  {" "}
                  Professor
                </a>
              </p>
            </div>
          </Col>
          <Col  offset={1} span={5}>
            <h3>Learn More</h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FooterInfo;
