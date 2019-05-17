import React, { Component } from 'react'
import styles from './index.less'
export default class index extends Component {
  render() {
    return (
      <div className={styles.box}>
        <h3 className={styles.title}>{this.props.title}</h3>
        {this.props.children}
      </div>
    )
  }
}
