import styles from './index.css';
import React, { Component } from 'react'
import router from 'umi/router';
import MyHeader from './MyHeader'
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'dva'
import {FormattedMessage } from 'umi/locale'

const { SubMenu } = Menu;
const { Content, Footer } = Layout;

@connect(state => state, (dispatch) => ({

}))
class BasicLayout extends Component {
    constructor (props) {
      super(props);
      this.state = {
        MenuItem : [
          {
            type: 'Item',
            textId: 'MENU_Overall_Situation',
            key: '/',
            icon: 'pie-chart'
          },
          {
            type: 'Item',
            textId: 'MENU_Content_Monitoring',
            key: '/content_Monitoring',
            icon: 'desktop'
          },
          {
            type: 'SubMenu',
            key: 'sub1',
            title: 'MENU_Group_Monitoring',
            titleIcon: 'mail',
              MenuItem: [
                {
                  type: 'Item',
                  textId: 'MENU_Account_Behavior',
                  key: '/account_behavior'
                },
                {
                  type: 'Item',
                  textId: 'MENU_Group_Characteristics',
                  key: '/group_characteristics'
                }
              ]
          },{
            type: 'Item',
            textId: 'MENU_Correlation_Analysis',
            key: '/correlation_analyze',
            icon: 'inbox'
          },{
            type: 'Item',
            textId: 'MENU_Monitoring_Configuration',
            key: '/7',
            icon: 'inbox'
          },{
            type: 'SubMenu',
            key: 'sub2',
            title: 'MENU_Collect_Configuration',
            titleIcon: 'appstore',
              MenuItem: [
                {
                  type: 'Item',
                  textId: 'MENU_Account_Management',
                  key: '/8'
                },
                {
                  type: 'Item',
                  textId: 'MENU_Group_Management',
                  key: '/9'
                },
                {
                  type: 'Item',
                  textId: 'MENU_Acquisition_Key',
                  key: '/10'
                },
                {
                  type: 'Item',
                  textId: 'MENU_Performance_Monitoring',
                  key: '/11'
                },
                {
                  type: 'Item',
                  textId: 'MENU_Buffs_Group',
                  key: '/12'
                }
              ]
          },{
            type: 'SubMenu',
            key: 'sub3',
            title: 'MENU_System_Management',
            titleIcon: 'appstore',
              MenuItem: [
                {
                  type: 'Item',
                  textId: 'MENU_User_Control',
                  key: '/13'
                },
                {
                  type: 'Item',
                  textId: 'MENU_Divisional_Management',
                  key: '/14'
                },
                {
                  type: 'Item',
                  textId: 'MENU_Role_Management',
                  key: '/15'
                },
                {
                  type: 'Item',
                  textId: 'MENU_Function_Management',
                  key: '/16'
                },
                {
                  type: 'Item',
                  textId: 'MENU_Operation_Log',
                  key: '/17'
                }
              ]
          }

        ],
        collapsed: false,
        rootSubmenuKeys : ['sub1', 'sub2', 'sub3'],
        openKeys: [],
        options: [
          {
            title: 'aaa'
          }
        ]
      };
    }
    onOpenChange = openKeys => {
      // console.log(this.state.openKeys)
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
      }
    }
    onClickItem = option => {
      router.push(option.key)
    }
    render () {
      let {MenuItem} = this.state;
      return (
         <Layout className={styles.main_box}>
          <MyHeader></MyHeader>
          <Layout className={styles.layout}>
            <Menu
              defaultSelectedKeys={['1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.props.menu.collapsed}
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              onClick={this.onClickItem}
              width={250}
              className={styles.menu}
            >
            {MenuItem ? MenuItem.map((item) => {
              if(item.type === 'Item') {
                return (<Menu.Item key={item.key}>
                          <Icon type={item.icon} />
                          <FormattedMessage id={item.textId}></FormattedMessage>
                        </Menu.Item>)
              }else {
                  return (<SubMenu
                            key={item.key}
                            title={
                              <span>
                                <Icon type={item.titleIcon} />
                                <FormattedMessage id={item.title}></FormattedMessage>
                              </span>
                            }
                          >
                            {item.MenuItem ? item.MenuItem.map((item) => (
                              <Menu.Item key={item.key}>
                                    <FormattedMessage id={item.textId}></FormattedMessage>
                              </Menu.Item>
                            )) :null }
                          </SubMenu>)
              }
            }) : null}
            </Menu>
       
            <Layout style={{ padding: '20px' }}>
              <Content
                style={{
                  background: '#f0f2f5',
                  padding: 24,
                  margin: 0,
                  minHeight: 240,
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
          <Footer className={styles.footer}>
              2019 © zhangshun <a href="/">突发预警系统</a>
          </Footer>
        </Layout>
      )
    }
}

export default BasicLayout;
