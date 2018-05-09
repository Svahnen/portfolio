import React, { Component } from 'react'
import styles from './Techniques.sass'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Techniques extends Component {
  render () {
    const { scroll } = this.props
    return (
      <div id={'Techniques'} className={styles.wrapper}>
        <div className={scroll > window.innerHeight * 3 - window.innerHeight * 0.30 ? classNames(styles.slideIn, styles.content) : styles.content}>
          <h2 className={styles.title}>Techniques I use</h2>
          <span className={styles.spanLine}/>
          <p>Techniques</p>
        </div>
      </div>
    )
  }
}

Techniques.propTypes = {
  scroll: PropTypes.number
}
