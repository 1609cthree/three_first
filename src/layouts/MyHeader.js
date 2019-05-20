import styles from './index.css';
import React, { Component } from 'react'
import { Layout, Icon, Input, AutoComplete, Popover, List, Avatar, Badge} from 'antd';
import { connect } from 'dva'
import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi/locale'

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
          InputWidth: '150px',
          data: ['Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
                'Australian walks 100km after outback crash.',
                'Man charged over missing wedding girl.',
                'Los Angeles battles huge wildfires.'],
          userData: [
            '退出登录'
          ],
          languageData: [
            '中文简体',
            'English',
            'France'

          ],
          options: [
            'aa','bb','cc'
          ]
      }
  }
  localeChange (locale) {
    if (locale === '中文简体') {
        setLocale('zh-CN')
    } else if (locale === 'English') {
        setLocale('en-US')
    }
    console.log(locale)
  }
  render() {
    return (
      <Header className="header">
      <div className={styles.header_box}>
          <div>
            <span className={styles.logo} style={{display: this.props.menu.collapsed ? 'none' : 'inline' }}>
            <FormattedMessage id="WELCOME_TO_UMI_WORLD"></FormattedMessage>
            </span>
            <Icon
              className="trigger"
              style={{fontSize: '20px'}}
              type={this.props.menu.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.ChangeCollapsed}
            />
          </div>
            
           <div>
              <AutoComplete
                className="certain-category-search"
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={false}
                dropdownStyle={{ width: 300 }}
                size="large"
                style={{ width: this.state.InputWidth }}
                dataSource={this.state.options}
                placeholder="input here"
                optionLabelProp="value"
                onFocus={()=>{this.setState({InputWidth: '250px'})}}
                onBlur={()=>{this.setState({InputWidth: '150px'})}}

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
                       <span>
                       <Badge offset={[-10,0]} count={5}>
                          <Icon type="bell" style={{fontSize: '20px', margin: '0 10px'}} />
                      </Badge>
                      </span>
              </Popover>
              <Popover placement="bottomRight" 
                      //  title="消息" 
                       content={<List 
                       dataSource={this.state.userData}
                       renderItem={(item)=>(
                          <List.Item>{item}</List.Item>
                       )}
                       ></List>}
                       size="big" 
                       trigger="click">
                  <span style={{padding: '0 10px'}}><Avatar icon="user" style={{marginRight: '5px'}} />Nick</span>
              </Popover>
              <Popover placement="bottomRight" 
                      //  title="消息" 
                       content={<List 
                       dataSource={this.state.languageData}
                       renderItem={(item)=>(
                          <List.Item onClick={() => {this.localeChange(item)}}>{item}</List.Item>
                       )}
                       ></List>}
                       size="small" 
                       trigger="click">
                  {/* <Icon type="bell" style={{fontSize: '20px', margin: '0 10px'}} /> */}
                  <span>中文简体V</span>
              </Popover>
           </div>
      </div>
          
          </Header>
    )
  }
}

export default MyHeader