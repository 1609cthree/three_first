import styles from './index.css';
import React, { Component } from 'react'
import { connect } from 'dva'
import { Row, Col, Skeleton } from 'antd';
import Map from '@/components/Map/'
import CollectionTrend from '@/components/CollectionTrend/'
import EventAnalysis from '@/components/EventAnalysis/'
import DataSize from '@/components/DataSize/'
import ChartBox from '@/components/ChartBox/'
import RealData from '@/components/RealData'

// import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi/locale'
// console.log(formatMessage, setLocale, getLocale)
// 获取指定文字的多语言版本


@connect(state=>state.tab,(dispatch)=>{
    
    return {
      aa () {
        dispatch({
          type: 'tab/getChart1'
        })
      }
    }
    
})
class Page extends Component {

  state = {
    list: 
      {
        title: '实时数据',
        data: [
          {
            name: 'list1',
            tab: 'tab1',
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
            tab: 'tab2',
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
      },
      isSkeleton:true
    
  }
  componentDidMount () {
      this.props.aa();
  }
  static getDerivedStateFromProps (prevProps,bb) {
      console.log(prevProps, bb)
      return {isSkeleton:prevProps.isSkeleton}
  }
  render () {
    
    return (
      <div className={styles.normal}>
        <div className={styles.databox}>
          <DataSize
              AllNum="1207800"
              DayNum="300" 
              title="Tor">
          </DataSize>
          <DataSize
              AllNum="1207800"
              DayNum="300" 
              title="Tor">
          </DataSize>
          <DataSize
              AllNum="1207800"
              DayNum="300" 
              title="Tor">
          </DataSize>
          <DataSize
              AllNum="1207800"
              DayNum="300" 
              title="Tor">
          </DataSize>
          <DataSize
              AllNum="1207800"
              DayNum="300" 
              title="Tor">
          </DataSize>
        </div>
              
          
      <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <ChartBox title="突发事件地图">
            <Skeleton loading={this.state.isSkeleton}>
              <Map></Map>
            </Skeleton>
            </ChartBox>
          </Col>
          <Col className="gutter-row" span={12}>
            <RealData list={this.state.list}></RealData>
          </Col>
          <Col className="gutter-row" span={12}>
            <ChartBox title="采集量趋势">
              <EventAnalysis></EventAnalysis>
            </ChartBox>
          </Col>
          <Col className="gutter-row" span={12}>
            <ChartBox title="事件类型">
              <CollectionTrend></CollectionTrend>
            </ChartBox>
          </Col>
    </Row>
        
      </div>
    );
  }
  
}

export default Page
