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
      scroll: 0
    }
  }

  componentWillMount () {
    window.addEventListener('scroll', this.handleInput)
   }

  render () {
    const { scroll } = this.state
    return (
  <div className='ScrollWrapper'>
    <AboutMe scroll={scroll} />
    <WhyMe scroll={scroll} />
    <Techniques scroll={scroll} />
    <SayHi scroll={scroll} />
  </div>
)
}
handleInput = () => {
  if (() => canSetScroll) {
    console.log('setting scroll')
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
