import React, { Component } from 'react'
import styles from './AboutMe.sass'
import Navigation from '../components/Navigation'
/* import MobileMenu from '../components/MobileMEnu' */
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
          <p>
            I have always had a huge interest in electronics and what made them work.
          </p>
          <p>
            When I was 6 years old I got a used electric race-car set, it had parts missing and lacked batteries.
          </p>
          ⚠️
          <i>
          But that did not stop me from using my teeth to strip the cords of an old phone charger and plugging it into a wall outlet.
          </i>
          <p>
            I survived this and many other more or less successful deep dives into how electronics work.
            After graduating school with an electrical-engineering exam, I worked in the Fire Alarm section for some years, where I programmed different Fire Alarm functions and tested that everything worked like intended.
          </p>
          <p>
            When not spending time with my wife and daughters, I find a challenge in repairing and modding things like old Gameboys.
          </p>
          <div className={styles.warning}>
          ⚠️<i>Do not try this at home!</i>
          </div>
        </div>
      </div>
    )
  }
}

AboutMe.propTypes = {
  mobile: PropTypes.bool,
  scroll: PropTypes.number
}
