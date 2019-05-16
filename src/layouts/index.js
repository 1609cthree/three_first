import styles from './index.css';
import React, { Component } from 'react'
import router from 'umi/router';
import MyHeader from './MyHeader'
import { Layout, Menu, Icon, Input, AutoComplete} from 'antd';
import { connect } from 'dva'
const { SubMenu } = Menu;
const { Content, Footer } = Layout;
@connect(state => state, (dispatch) => ({

}))
class BasicLayout extends Component {
    constructor (props) {
      super(props);
      this.state = {
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
      // console.log(option, router)
      router.push(option.key)
    }
    render () {
      console.log(this.props)
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
                <Menu.Item key="/">
                  <Icon type="pie-chart" />
                  <span>整体态势</span>
                </Menu.Item>
                <Menu.Item key="/event_analysis">
                  <Icon type="desktop" />
                  <span>内容监测</span>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="mail" />
                      <span>群组监测</span>
                    </span>
                  }
                >
                  <Menu.Item key="/collectiontrend">账号行为</Menu.Item>
                  <Menu.Item key="4">群组特征</Menu.Item>
                </SubMenu>
                <Menu.Item key="5">
                  <Icon type="inbox" />
                  <span>关联分析</span>
                </Menu.Item>
                
                <Menu.Item key="6">
                  <Icon type="inbox" />
                  <span>监测配置</span>
                </Menu.Item>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>采集配置</span>
                    </span>
                  }
                >
                  <Menu.Item key="7">帐号管理</Menu.Item>
                  <Menu.Item key="8">群组管理</Menu.Item>
                  <Menu.Item key="9">采集关键字</Menu.Item>
                  <Menu.Item key="10">运行监控</Menu.Item>
                  <Menu.Item key="11">辅助加群</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>系统管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="12">用户管理</Menu.Item>
                  <Menu.Item key="13">部门管理</Menu.Item>
                  <Menu.Item key="14">角色管理</Menu.Item>
                  <Menu.Item key="15">功能管理</Menu.Item>
                  <Menu.Item key="16">操作日志</Menu.Item>
                </SubMenu>
              </Menu>
       
            <Layout style={{ padding: '20px' }}>
              <Content
                style={{
                  background: '#fff',
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
