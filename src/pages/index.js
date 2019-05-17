import styles from './index.css';
import React, { Component } from 'react'
import { connect } from 'dva'
import { Row, Col } from 'antd';
import Map from '@/components/Map/'
import CollectionTrend from '@/components/CollectionTrend/'
import EventAnalysis from '@/components/EventAnalysis/'

import ChartBox from '@/components/ChartBox/'

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
  render () {
    return (
      <div className={styles.normal}>
      <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <ChartBox title="突发事件地图">
              <Map></Map>
            </ChartBox>
          </Col>
          <Col className="gutter-row" span={12}>
            <ChartBox title="采集量趋势">
              <EventAnalysis></EventAnalysis>
            </ChartBox>
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
