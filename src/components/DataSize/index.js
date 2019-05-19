import React, { Component } from 'react'
import styles from './index.less'
 class DataSize extends Component {
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.allnum}>
            <div>
                <h2>{this.props.AllNum}</h2>
                <p>全部数据量</p>
            </div>
            <div className={styles.title}>{this.props.title}</div>
        </div>
        <div className={styles.daynum}>
            <span>今日数据量</span>
            <span>{this.props.DayNum}</span>
        </div>
      </div>
    )
  }
}

export default DataSize
