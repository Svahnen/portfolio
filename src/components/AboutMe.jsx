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
        <div className={styles.titleWrapper}>
          <div className={styles.titleContent}>
            <h2 className={styles.title}>ABOUT</h2>
            <span className={styles.spanLine}/>
          </div>
        </div>
        <div style={{display: 'flex', marginTop: '40px'}}>
        {scroll > 300 ? <div className={styles.circleExpand}><p>Responsible</p></div> : <div className={styles.circleCompress}></div>}
        {scroll > 300 ? <div className={styles.circleExpand}><p>Fast learner</p></div> : <div className={styles.circleCompress}></div>}
        {scroll > 300 ? <div className={styles.circleExpand}><p>Thorough</p></div> : <div className={styles.circleCompress}></div>}
        {scroll > 300 ? <div className={styles.circleExpand}><p>Dynamic</p></div> : <div className={styles.circleCompress}></div>}
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates molestias architecto omnis laboriosam culpa nesciunt adipisci qui sequi veniam quam dolore facilis, asperiores, doloremque odit, earum voluptatem sint eius impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, possimus iure repudiandae reprehenderit deserunt modi eum doloribus similique delectus tempora aperiam magni quia temporibus voluptas. Laboriosam libero iusto numquam voluptatem.</p>
      </div>
    )
  }
  handleInput = () => this.setState({ scroll: window.scrollY })
}
