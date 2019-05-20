import React, { Component } from 'react';
import styles from './index.less';
import { List } from 'antd';

class ShowList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listData : [],
            defaultInd: 0,
        }
    }
    componentWillMount () {
        // 给listData遍历赋值
        let { listData } = this.state;
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
        let { listData } = this.state;
        return (
            <div className={styles.listShow}>
                {/* 列表展示 */}
                <h3 style={{ margin: '16px 0' }}><span>列表展示</span> <span>总数：649230</span></h3>
                <List
                    itemLayout="vertical" //itemLayout 属性为 vertical 可实现竖排列表样式。
                    size="large"
                    // 直接在List中添加分页功能 pageSize是每页显示数据条数
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 5,
                        }}
                    bordered
                    dataSource={listData}
                    renderItem={item => 
                    <List.Item
                        key={item.title}
                        title={<span>{item.title}</span>}
                        >
                        <p className={styles.contents}>{item.content}</p>
                        <div className={styles.timesMsg}>
                            <span className={styles.times}>时间：{new Date().toLocaleString().split('/').join('-')}</span>
                            <span className={styles.forms}>来源：<a href="/">{item.forms}</a></span>
                        </div>
                        <div className={styles.tagsMsg}>
                            <span className={styles.tagOne}>{item.tag[0]}</span>
                            <span className={styles.tagTwo}>{item.tag[1]}</span>
                        </div>
                    </List.Item>}
                />
            </div>
        );
    }
}

export default ShowList;