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
      <div id={'AboutMe'}>

            <h2 className={styles.title}>About me</h2>
            <span className={styles.spanLine}/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, possimus iure repudiandae reprehenderit deserunt modi eum doloribus similique delectus tempora aperiam magni quia temporibus voluptas. Laboriosam libero iusto numquam voluptatem.</p>
      </div>
    )
  }
  handleInput = () => this.setState({ scroll: window.scrollY })
}
