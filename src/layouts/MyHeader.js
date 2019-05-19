import styles from './index.css';
import React, { Component } from 'react'
import { Layout, Icon, Input, AutoComplete, Popover, Button, Tag, List, Avatar, Badge} from 'antd';
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
            title: '中文简体',
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
                {id: 'zh-CN',cont:'中文简体'},
                {id: 'en-US',cont:'English'}
            ],
            options: [
                'aa','bb','cc'
            ]
        }
    }
    componentDidMount () {
        
    }
    clickItem = (lang, title) => {
        console.log(lang, title)
        setLocale(lang)
        this.setState({ title })
    }
    changeLang = () => {
        var lang = 'zh-CN';
        console.log(1)
    }
    render() {
        console.log(getLocale)
        let {title} = this.state;
        return (
            <Header className="header">
                <div className={styles.header_box}>
                    <div>
                        <span className={styles.logo} style={{display: this.props.menu.collapsed ? 'none' : 'inline' }}>
                            <FormattedMessage id='HEADER_TITLE'/>
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
                                    <List.Item onClick={()=>this.clickItem(item.id, item.cont)}>{item.cont}</List.Item>
                                )}
                                ></List>}
                                size="small" 
                                trigger="click">
                            {/* <Icon type="bell" style={{fontSize: '20px', margin: '0 10px'}} /> */}
                            <span onClick={this.changeLang}>{title}</span>
                        </Popover>
                    </div>
                </div>
            </Header>
        )
    }
}

export default MyHeader