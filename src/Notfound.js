import React, { Component } from 'react';
import FooterInfo from './FooterInfo';
import MenuEntry from './MenuEntry';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class Notfound extends Component {

    render() {
        return(
            <div>
                <Layout>
                    <Header style={{ width: '100%' }}>
                        <MenuEntry />
                    </Header>
                    <Content style={{textAlign: "center", padding: "20px"}}>
                        <h1>Sorry, the page is running away:)</h1>
                    </Content>
                    <Footer>
                        <FooterInfo />
                    </Footer>
			    </Layout>
            </div>
        )
    }
}

export default Notfound