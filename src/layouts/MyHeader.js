import styles from './index.css';
import React, { Component } from 'react'
import { Layout, Icon, Input, AutoComplete, Popover, List, Avatar, Badge} from 'antd';
import { connect } from 'dva'
import { setLocale, getLocale, FormattedMessage } from 'umi/locale'

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
            {
              title:'中文简体',
              locale: 'zh-CN'
            },
            {
              title:'English',
              locale: 'en-US'
            },
            {
              title:'France',
              locale: 'zh-CN'
            }
          ],
          options: [
            'aa','bb','cc'
          ],
          visible: false
      }
  }
  localeChange (locale) {
    setLocale(locale)
    console.log(locale)
    this.setState({
      visible: false,
      locale
    })
  }
  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  render() {
    let activeLocale = this.state.languageData.find(item => item.locale === getLocale())
    activeLocale = activeLocale ? activeLocale.title : '未知'
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
                       <span className={styles.hover}>
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
                  <span className={styles.hover} style={{padding: '0 10px'}}><Avatar icon="user" style={{marginRight: '5px'}} />Nick</span>
              </Popover>
              <Popover placement="bottomRight"                       
                       visible={this.state.visible}
                       onVisibleChange={this.handleVisibleChange}
                       content={<List
                       dataSource={this.state.languageData}
                       renderItem={(item)=>(
                          <List.Item className={styles.hover} style={{padding: '5px 10px'}} onClick={() => {this.localeChange(item.locale)}}>{item.title}</List.Item>
                       )}
                       ></List>}
                       size="small" 
                       trigger="click">
                  <span className={styles.hover}>{ activeLocale }</span>
              </Popover>
           </div>
      </div>
          
          </Header>
    )
  }
}

export default MyHeader