import styles from './index.less';
import React, { Component } from 'react';
import { Layout, Icon, List, Menu, Dropdown } from 'antd';

const { Header, Content } = Layout;

class HeadScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listData : [],
            defaultInd: 0,
            menuCont: 
            (<Menu>
                <Menu.Item key="1">1rd menu item</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="2">2rd menu item</Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
            ),
            mores: 
            (<Menu>
                <Menu.Item key="1">
                    <Icon type="fire" />
                    巴黎圣母院大火
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="2">
                    <Icon type="fire" />
                    墨尔本枪击案
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="fire" />
                    波音修坏顺风飞机
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="book" />
                    索马里挟持人质
                </Menu.Item>
            </Menu>)
        }
    }
    render() {
        let { menuCont, mores } = this.state;
        return (
            <div className={styles.headerTitle}>
                <Icon type="home" />
                <span>埃塞尔比亚坠机</span>
                {/* 下拉按钮 */}
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
                {/* 右侧按钮 */}
                <div className={styles.leftBtns}>
                    <Dropdown overlay={mores} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#">
                        更多 <Icon type="down" />
                        </a>
                    </Dropdown>
                    <p>检测管理</p>
                </div>
            </div>
        );
    }
}

export default HeadScreen;