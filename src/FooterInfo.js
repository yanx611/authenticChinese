import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';

// component store footer information 

class FooterInfo extends Component {
    render() {
        return(
            <div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <h3>About</h3> 
                            <small>The website provides multiple types of videos that related to Chinese learning topics in Rensselaer Polytechnic Institute. The website encourage the student to learn from the video and explore the original series. </small>
                        </div>
                        <Divider type="vertical" />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <h3>Contact</h3>
                            <p><small><a href="https://github.com/yanx611/videoLearning" target="_blank" rel='noreferrer noopener'>Github</a></small></p>
                            <p><small><a href="mailto:xxx@rpi.edu" target="_top">Contact the development team</a></small></p>
                            <p><small><a href="mailto:xxx@rpi.edu" target="_top">Contact Professor </a></small></p>
                        </div>
                        <Divider type="vertical" />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <h3>Other Resource</h3>
                            <small></small>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <h3>Learn More</h3>
                            <small></small>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default FooterInfo;
