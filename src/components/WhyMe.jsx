import React, { Component } from 'react'
import styles from './WhyMe.sass'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class WhyMe extends Component {
  render () {
    const { scroll } = this.props
    return (
      <div id={'WhyMe'} className={styles.wrapper}>
        <div className={scroll > window.innerHeight * 2 - window.innerHeight * 0.30 ? classNames(styles.slideIn, styles.content) : styles.content}>
          <h2 className={styles.title}>Why me?</h2>
          <span className={styles.spanLine}/>
          <p>I am a person who likes challanges, I have a need to understand and find out how things work. I take pride in knowing i always do my best, and if i see multiple solutions to a problem, I always thing through each possible advantage or problem, I always think through eatch possible advantage or problem before I decide which solution I should use.</p>
        </div>
      </div>
    )
  }
}

WhyMe.propTypes = {
  scroll: PropTypes.number
}
