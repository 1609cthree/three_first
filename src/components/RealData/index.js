import React, { Component } from 'react'
import styles from './index.less'
import { Tabs, List, Icon, Skeleton } from 'antd';
const TabPane = Tabs.TabPane
export default class index extends Component {
  state = {
    list1: [
        {
          loading:false,
          count:'Just now'
        },{
          loading:false,
          count:'Just now'
        },{
          loading:false,
          count:'Just now'
        },{
          loading:false,
          count:'Just now'
        },{
          loading:false,
          count:'Just now'
        },
    ],
    list2: [
        {
          loading:false,
          count:'Just now'
        },{
          loading:false,
          count:'Just now'
        },{
          loading:false,
          count:'Just now'
        },{
          loading:false,
          count:'Just now'
        },{
          loading:false,
          count:'Just now'
        },
    ],
  } 
  callback(key) {
    // console.log(key);
  }
  render() {
    const { list } = this.props;
    return (
      <div className={styles.box}>

        <Tabs defaultActiveKey="1"
              tabBarExtraContent={<p className={styles.title}>{list.title}</p>}
              onChange={this.callback}>

              {list.data ? list.data.map(item => (
                  <TabPane tab={item.tab} key={item.key}>
                    <List
                      size="small"
                      className="demo-loadmore-list"
                      itemLayout="horizontal"
                      dataSource={item.items}
                      renderItem={item => (
                        <List.Item style={{background: 'rgba(200,200,200,.2)', padding: '0 7px 0 0',marginBottom: '10px'}}>
                          <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                              style={{lineHeight: '30px'}}
                              avatar={
                                <div style={{width: '30px', height: '30px', lineHeight: '30px',textAlign: 'center', fontSize: '15px',background: '#36c6d3'}}>
                                    <Icon type="bell" />
                                </div>
                              }
                              description={item.description}
                            />
                            <div>{item.count}</div>
                          </Skeleton>
                        </List.Item>
                      )}
                    />
                  </TabPane>

              )) : null}
      </Tabs>
      </div>
    )
  }
}
