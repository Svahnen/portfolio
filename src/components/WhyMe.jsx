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
          <p>I learn fast, like challenges and strive to always use or improve upon best practices. I have a need to understand and find out how things work.</p>
          <p>My background in Fire Alarm programming have given me tools and understanding of the logic used in programming languges.</p>
          <p>I take pride in knowing I always do my best, and if I see multiple solutions to a problem, I always think through each possible advantage or problem before I decide which solution I should use.</p>
          <p>And I really love to code.</p>
          <p>- Responsive of course!</p>
        </div>
      </div>
    )
  }
}

WhyMe.propTypes = {
  scroll: PropTypes.number
}
