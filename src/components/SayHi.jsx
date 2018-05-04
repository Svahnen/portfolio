import React, { Component } from 'react'
import styles from './SayHi.sass'

export default class SayHi extends Component {
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
      <div id={'SayHi'} className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={styles.title}>Say hi!</h2>
            <span className={styles.spanLine}/>
            <p>hello@jonnysvahn.se</p>
          </div>
          <p>All rights reserved Jonny Svahn 2018</p>
      </div>
    )
  }
  //TODO: Use this to enable animations comming in from the side while scrolling
  handleInput = () => this.setState({ scroll: window.scrollY })
}
