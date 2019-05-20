import styles from './index.less';
import React, { Component } from 'react';
import { Layout, Icon, List, Menu, Dropdown } from 'antd';

const { Header, Content } = Layout;

class ContentMonitoring extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listData : [],
            defaultInd: 0,
            menuCont: 
            (<Menu>
                <Menu.Item key="0">1st menu item</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="1">2st menu item</Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>)
        }
    }
    componentWillMount () {
        // 给listData遍历赋值
        let { listData, titleTag } = this.state;
        for(let i = 0; i < 15; i++) {
            listData.push({
                title: `title ${i}`,
                content:`${i+1}: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy sead euismod dolore tincidunt ut laoreet dolore dolor sit amet`,
                times: 'times',
                forms: 'Bob Robson',
                tag: ['#USA', '#涉枪']
            })
        }
        this.setState({listData})
    }
    render() {
        let { menuCont, listData } = this.state;
        // console.log(listData)
        return (
            <Layout className={styles.wrapper}>
                {/* 头部信息 */}
                <Header>
                    <Icon type="home" />
                    <span className={styles.headerTitle}>埃塞尔比亚坠机</span>
                    <div>
                    <Dropdown overlay={menuCont} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#">
                        全部账号 <Icon type="down" />
                        </a>
                    </Dropdown>
                    <Dropdown overlay={menuCont} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#">
                        全部群组 <Icon type="down" />
                        </a>
                    </Dropdown>
                    </div>
                </Header>
                <Content className={styles.mainWrap}>
                    {/* 内容主题 */}
                    <Layout className={styles.mainCont}>
                    {/* 头部导航 */}
                        <ul>
                            <li className={styles.active}>检测结果</li>
                            <li>监测分析</li>
                        </ul>
                        <div className={styles.listShow}>
                            {/* 列表展示 */}
                            <h3 style={{ margin: '16px 0' }}><span>列表展示</span> <span>总数：649230</span></h3>
                            <List
                                itemLayout="vertbaiduical" //itemLayout 属性为 vertical 可实现竖排列表样式。
                                size="large"
                                // 直接在List中添加分页功能 pageSize是每页显示数据条数
                                pagination={{
                                    onChange: page => {
                                        console.log(page);
                                    },
                                    pageSize: 5,
                                    }}
                                // header={<div>Header</div>} // 头部内容
                                // footer={<div>Footer</div>} // 底部内容
                                bordered
                                dataSource={listData}
                                renderItem={item => 
                                <List.Item
                                    key={item.title}
                                    title={<span>{item.title}</span>}
                                    >
                                    <p className={styles.contents}>{item.content}</p>
                                    <div className={styles.timesMsg}>
                                        <span className={styles.times}>时间：{new Date().toLocaleString()}</span>
                                        <span className={styles.forms}>来源：<a href="#">{item.forms}</a></span>
                                    </div>
                                    <div className={styles.tagsMsg}>
                                        <span className={styles.tagOne}>{item.tag[0]}</span>
                                        <span className={styles.tagTwo}>{item.tag[1]}</span>
                                    </div>
                                </List.Item>}
                            />
                        {console.log(new Date().toLocaleString())}
                        </div>
                    </Layout>
                </Content>
            </Layout>
        );
    }
}

export default ContentMonitoring;