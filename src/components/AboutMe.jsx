import React, { Component } from 'react'
import styles from './AboutMe.sass'

export default class AboutMe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scroll: ''
    }
  }

  componentWillMount () {
    window.addEventListener('scroll', this.handleInput)
   }

  render () {
    const { scroll } = this.state
    return (
      <div id={'AboutMe'} className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={styles.title}>About me</h2>
            <span className={styles.spanLine}/>
            <p>I learn  very fast and strive to always use or improve upon best practices. I code responsibly and apply a verry thorogh mindset when i code.</p>
            <p>And i really love to code.</p>
            <p>- Responsive of course!</p>
          </div>
      </div>
    )
  }
  //TODO: Use this to enable animations comming in from the side while scrolling
  handleInput = () => this.setState({ scroll: window.scrollY })
}
