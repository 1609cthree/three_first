import styles from './index.css';
import React, { Component } from 'react'
import { connect } from 'dva'
import { Row, Col } from 'antd';
import OnlineCondition from '@/components/OnlineCondition/'
import ContentPreferences from '@/components/ContentPreferences/'
import SentimentAnalysis from '@/components/SentimentAnalysis/'
import ChartBox from '@/components/ChartBox/'
import RealData from '@/components/RealData'

// import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi/locale'
// console.log(formatMessage, setLocale, getLocale)
// 获取指定文字的多语言版本


@connect(state=>state,(dispatch)=>{
    
    return {
      aa () {
        dispatch({
          type: 'tab/setAge'
        })
      }
    }
    
})
class Page extends Component {

  state = {
    list: 
      {
        title: '发言情况',
        data: [
          {
            name: 'list1',
            tab: 'Tor',
            key:'1',
            items: [
              {
                loading: false,
                icon: 'bell',
                description: 'Ant Design, a design language for',
                count: 'Just now'
              },{
                loading: false,
                icon: 'bell',
                description: 'Ant Design, a design language for',
                count: 'Just now'
              },{
                loading: false,
                icon: 'bell',
                description: 'Ant Design, a design language for',
                count: 'Just now'
              },{
                loading: false,
                icon: 'bell',
                description: 'Ant Design, a design language for',
                count: 'Just now'
              },{
                loading: false,
                icon: 'bell',
                description: 'Ant Design, a design language for',
                count: 'Just now'
              }
            ]

          },
          {
            name: 'list2',
            tab: '12P',
            key:'2',
            items: [
              {
                loading: false,
                icon: 'bell',
                description: 'Ant Design, a design language for',
                count: 'Just now'
              }
            ]

          }
        ]
      }
    
  }
  componentWillMount () {

  }
  render () {
    
    return (
      <div className={styles.normal}>
        <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <ChartBox title="上线情况">
                <OnlineCondition></OnlineCondition>
              </ChartBox>
            </Col>
            <Col className="gutter-row" span={12}>
              <RealData list={this.state.list}></RealData>
            </Col>
            <Col className="gutter-row" span={12}>
              <ChartBox title="内容偏好">
                <ContentPreferences></ContentPreferences>
              </ChartBox>
            </Col>
            <Col className="gutter-row" span={12}>
              <ChartBox title="情感分析">
                <SentimentAnalysis></SentimentAnalysis>
              </ChartBox>
            </Col>
        </Row>
        
      </div>
    );
  }
  
}

export default Page
