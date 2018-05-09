import React, { Component } from 'react'
import styles from './Techniques.sass'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import JsIcon from '../images/js.png'
import ReactIcon from '../images/react.png'
import NodeIcon from '../images/node.png'
import HtmlIcon from '../images/html.png'
import CssIcon from '../images/css.png'

export default class Techniques extends Component {
  render () {
    const { scroll } = this.props
    return (
      <div id={'Techniques'} className={styles.wrapper}>
        <div className={scroll > window.innerHeight * 3 - window.innerHeight * 0.30 ? classNames(styles.slideIn, styles.content) : styles.content}>
          <h2 className={styles.title}>Techniques I use</h2>
          <img src={JsIcon} />
          <p>JavaScript</p>
          <img src={ReactIcon} />
          <p>React</p>
          <img src={NodeIcon} />
          <p>NodeJS</p>
          <img src={HtmlIcon} />
          <p>HTML 5</p>
          <img src={CssIcon} />
          <p>CSS 3</p>
        </div>
      </div>
    )
  }
}

Techniques.propTypes = {
  scroll: PropTypes.number
}
