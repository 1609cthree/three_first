import styles from './index.css';
import React, { Component } from 'react'
import { Layout, Icon, Input, AutoComplete, Popover, Button, Tag, List, Avatar} from 'antd';
import { connect } from 'dva'
const { Header } = Layout;



@connect(state => state, (dispatch) => ({
    ChangeCollapsed () {
        dispatch({
            type: 'menu/ChangeCollapsed'
        })
    }
}))
class MyHeader extends Component {
  constructor (props) {
      super(props);
      this.state = {
          data: ['Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
                'Australian walks 100km after outback crash.',
                'Man charged over missing wedding girl.',
                'Los Angeles battles huge wildfires.']  
      }
  }
  render() {
    return (
      <Header className="header">
      <div className={styles.header_box}>
          <div>
            <span className={styles.logo} style={{display: this.props.menu.collapsed ? 'none' : 'inline' }}>突发预警系统</span>
            <Icon
              className="trigger"
              style={{fontSize: '20px'}}
              type={this.props.menu.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.ChangeCollapsed}
            />
          </div>
            
           <div>
              <AutoComplete
                // className="certain-category-search"
                // dropdownClassName="certain-category-search-dropdown"
                // dropdownMatchSelectWidth={false}
                // dropdownStyle={{ width: 300 }}
                // size="large"
                // style={{ width: '100%' }}
                // dataSource={this.state.options}
                // placeholder="input here"
                // optionLabelProp="value"
              >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
              </AutoComplete>
              <Popover placement="bottomRight" 
                       title="消息" 
                       content={<List 
                       dataSource={this.state.data}
                       renderItem={(item)=>(
                          <List.Item>{item}</List.Item>
                       )}
                       ></List>}
                       size="big" 
                       trigger="click">
                  <Icon type="bell" style={{fontSize: '20px', margin: '0 10px'}} />
              </Popover>
              <Popover placement="bottomRight" 
                      //  title="消息" 
                       content={<List 
                       dataSource={this.state.data}
                       renderItem={(item)=>(
                          <List.Item>{item}</List.Item>
                       )}
                       ></List>}
                       size="big" 
                       trigger="click">
                  {/* <Icon type="bell" style={{fontSize: '20px', margin: '0 10px'}} /> */}
                  <span><Avatar icon="user" />Nick</span>
              </Popover>
              <Popover placement="bottomRight" 
                      //  title="消息" 
                       content={<List 
                       dataSource={this.state.data}
                       renderItem={(item)=>(
                          <List.Item>{item}</List.Item>
                       )}
                       ></List>}
                       size="big" 
                       trigger="click">
                  {/* <Icon type="bell" style={{fontSize: '20px', margin: '0 10px'}} /> */}
                  <span><Tag color="#f50">#f50</Tag>中文简体V</span>
              </Popover>
           </div>
      </div>
          
          </Header>
    )
  }
}

export default MyHeader