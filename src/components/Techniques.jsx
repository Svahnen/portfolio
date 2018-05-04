import React, { Component } from 'react'
import styles from './Techniques.sass'

export default class Techniques extends Component {
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
      <div id={'Techniques'} className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={styles.title}>Techniques I use</h2>
            <span className={styles.spanLine}/>
            <p>Techniques</p>
          </div>
      </div>
    )
  }
  //TODO: Use this to enable animations comming in from the side while scrolling
  handleInput = () => this.setState({ scroll: window.scrollY })
}
