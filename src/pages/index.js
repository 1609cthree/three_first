import styles from './index.css';
import React, { Component } from 'react'
import { connect } from 'dva'
import Map from '@/components/Map/'
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
        <Map></Map>
      </div>
    );
  }
  
}

export default Page
