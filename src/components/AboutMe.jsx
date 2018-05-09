import React, { Component } from 'react'
import styles from './AboutMe.sass'
import Navigation from '../components/Navigation'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// TODO: Fix so about does not snap uppwards when position is set to 'fixed'

export default class AboutMe extends Component {
  render () {
    const { scroll, mobile } = this.props
    return (
      <div id={'AboutMe'} className={styles.wrapper}>
        {!mobile && scroll < window.innerHeight
          ? <Navigation />
          : !mobile && scroll > window.innerHeight
            ? <Navigation position='fixed' />
            : null }
        <div className={scroll > window.innerHeight - window.innerHeight * 0.30 ? classNames(styles.slideIn, styles.content) : styles.content}>
          <h2 className={styles.title}>About me</h2>
          <span className={styles.spanLine}/>
          <p>I learn  very fast and strive to always use or improve upon best practices. I code responsibly and apply a verry thorogh mindset when i code.</p>
          <p>And i really love to code.</p>
          <p>- Responsive of course!</p>
        </div>
      </div>
    )
  }
}

AboutMe.propTypes = {
  mobile: PropTypes.bool,
  scroll: PropTypes.number
}
