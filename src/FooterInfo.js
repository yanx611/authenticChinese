import React, { Component } from "react";
import { Row, Col, Divider, Icon } from "antd";
import "antd/dist/antd.css";

// component store footer information

class FooterInfo extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col offset={1} span={11}>
            <div className="gutter-box">
              <h3>Project Authentic Chinese</h3>
              Project Authentic Chinese provides videos clips about how Chinese languages used in day-to-day communication. The topics available on this website are selected from the textbooks used in Rensselaer Polytechnic Institute. 
            </div>
          </Col>
          <Col offset={1} span={11}>
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
                <Divider type="vertical" />
                <Icon type="mail" />
                <a href="mailto:yanx611@gmail.com" target="_top">
                  {" "}
                  Team
                </a>
                <Divider type="vertical" />
                <Icon type="user" />
                <a href="mailto:zhouy12@rpi.edu" target="_top">
                  {" "}
                  Professor
                </a>
              </p>
              <p>
                <a
                  href="https://www.rpi.edu/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Rensselaer Polytechnic Institute
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FooterInfo;
