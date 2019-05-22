import styles from './index.less';
import React, { Component } from 'react';
import { Layout, Tabs, Button } from 'antd';
import HeadScreen from '@/components/HeadScreen/index';
import ShowList from '@/components/ShowList/index';

const { Header, Content } = Layout;
const TabPane = Tabs.TabPane;

class ContentMonitoring extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultInd: 0,
            operations: (<Button>Extra Action</Button>)
        }
    }
    render() {
        let { operations } = this.state;
        return (
            <Layout className={styles.wrapper}>
                {/* 头部信息 */}
                <Header>
                    <HeadScreen/>
                </Header>
                <Content className={styles.mainWrap}>
                    {/* 内容主题 */}
                    <Layout className={styles.mainCont}>
                    {/* 头部导航 */}
                        {/* <ul>
                            <li className={styles.active}>检测结果</li>
                            <li>监测分析</li>
                        </ul> */}
                        <Tabs tabBarExtraContent={operations}>
                            <TabPane tab="检测结果" key="1">
                                {/* 列表展示 */}
                                <ShowList/>
                            </TabPane>
                            <TabPane tab="监测分析" key="2">
                                Content of tab 2
                            </TabPane>
                        </Tabs>,
                        
                        {/* 监测分析 */}
                        <div className={styles.analyze}></div>
                    </Layout>
                </Content>
            </Layout>
        );
    }
}

export default ContentMonitoring;