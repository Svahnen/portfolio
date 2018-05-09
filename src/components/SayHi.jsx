import React, { Component } from 'react'
import styles from './SayHi.sass'
import EmailIcon from '../images/email_white_96x96.png'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class SayHi extends Component {
  render () {
    const { scroll } = this.props
    return (
      <div id={'SayHi'} className={styles.wrapper}>
        <div className={scroll > window.innerHeight * 4 - window.innerHeight * 0.30 ? classNames(styles.slideIn, styles.content) : styles.content}>
          <h2 className={styles.title}>Say hi!</h2>
          <span className={styles.spanLine}/>
          <a className={styles.mailto} href="mailto:hello@jonnysvahn.se"><img src={EmailIcon} /></a>
          <a className={styles.mailto} href="mailto:hello@jonnysvahn.se">hello@jonnysvahn.se</a>
        </div>
        <p>All rights reserved Jonny Svahn 2018</p>
      </div>
    )
  }
}

SayHi.propTypes = {
  scroll: PropTypes.number
}
