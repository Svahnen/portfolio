import React, { Component } from 'react'
import styles from './WhyMe.sass'

export default class WhyMe extends Component {
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
      <div id={'WhyMe'} className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={styles.title}>Why me?</h2>
            <span className={styles.spanLine}/>
            <p>I am a person who likes challanges, I have a need to understand and find out how things work. I take pride in knowing i always do my best, and if i see multiple solutions to a problem, I always thing through each possible advantage or problem, I always think through eatch possible advantage or problem before I decide which solution I should use.</p>
          </div>
      </div>
    )
  }
  //TODO: Use this to enable animations comming in from the side while scrolling
  handleInput = () => this.setState({ scroll: window.scrollY })
}
