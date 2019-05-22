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
          type: 'tab/getEquipmentType'
        })
        dispatch({
          type: 'tab/getChart1'
        })
        dispatch({
          type: 'tab/getChart2'
        })
        dispatch({
          type: 'tab/getChart3'
        })
      },
      bb () {
        dispatch({
          type: 'tab/getPollEquipment'
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
      isSkeleton1:true ,
      isSkeleton2:true ,
      isSkeleton3:true 
  }
  componentDidMount () {
      this.props.aa();

      this.timer = setInterval(() => {
          this.props.bb();
      }, 5000);
  }
  static getDerivedStateFromProps (prevProps) {
      return {
        isSkeleton1:prevProps.isSkeleton1,
        isSkeleton2:prevProps.isSkeleton2,
        isSkeleton3:prevProps.isSkeleton3
      }
  }

  
  render () {
    return (
      <div className={styles.normal}>
        <div className={styles.databox}>
        {
          this.props.EquipmentType.map((item,index) => (
            <DataSize
                key={index}
                AllNum={item.gatherCount}
                DayNum={item.todayCount} 
                title={item.name}>
            </DataSize>
          ))
        }
          
        </div>
              
          
      <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <ChartBox title="突发事件地图">
            <Skeleton loading={this.state.isSkeleton1}>
              <Map></Map>
            </Skeleton>
            </ChartBox>
          </Col>
          <Col className="gutter-row" span={12}>
            <RealData list={this.state.list}></RealData>
          </Col>
          <Col className="gutter-row" span={12}>
            <ChartBox title="采集量趋势">
              <Skeleton loading={this.state.isSkeleton2}>
                <EventAnalysis></EventAnalysis>
              </Skeleton>
            </ChartBox>
          </Col>
          <Col className="gutter-row" span={12}>
            <ChartBox title="事件类型">
              <Skeleton loading={this.state.isSkeleton3}>
                 <CollectionTrend></CollectionTrend>
              </Skeleton>
            </ChartBox>
          </Col>
    </Row>
        
      </div>
    );
  }
componentWillUnmount(){
    if (this.timer) {
        clearInterval(this.timer)
    }
}
  
}

export default Page
