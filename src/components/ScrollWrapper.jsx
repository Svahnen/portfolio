import React, { Component } from 'react'
import Cover from './Cover'
import AboutMe from './AboutMe'
import WhyMe from './WhyMe'
import SayHi from './SayHi'
import Techniques from './Techniques'

export default class ScrollWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scroll: 0,
      mobile: true
    }
  }

  componentWillMount () {
    window.addEventListener('scroll', this.handleInput)
   }

   componentDidMount () {
    setInterval(() => {
      if (window.innerWidth <= 600) this.setState({ mobile: true })
      if (window.innerWidth > 600) this.setState({ mobile: false })
    }, 1000)
   }

  render () {
    const { scroll, mobile } = this.state
    return (
  <div className='ScrollWrapper'>
    <AboutMe scroll={scroll} mobile={mobile} />
    <WhyMe scroll={scroll} />
    <Techniques scroll={scroll} />
    <SayHi scroll={scroll} />
  </div>
)
}
handleInput = () => {
  if (() => canSetScroll) {
    this.setState({ scroll: window.scrollY })
  }
}

}

let canSetScroll = false
setInterval(() => {
  canSetScroll = true
  setTimeout(() => {
    canSetScroll = false
  }, 25)
}, 25)
