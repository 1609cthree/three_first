import styles from './index.less';
import React, { Component } from 'react';
import { Layout } from 'antd';
import HeadScreen from '@/components/HeadScreen/index';
import ShowList from '@/components/ShowList/index';

const { Header, Content } = Layout;

class ContentMonitoring extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultInd: 0,
        }
    }
    render() {
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
                        <ul>
                            <li className={styles.active}>检测结果</li>
                            <li>监测分析</li>
                        </ul>
                        {/* 列表展示 */}
                        <ShowList/>
                        {/* 监测分析 */}
                        <div className={styles.analyze}></div>
                    </Layout>
                </Content>
            </Layout>
        );
    }
}

export default ContentMonitoring;