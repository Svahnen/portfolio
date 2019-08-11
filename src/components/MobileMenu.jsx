import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import smoothScroll from 'smoothscroll'
import PropTypes from 'prop-types'
import styles from './MobileMenu.sass'

function coverScroll (e) {
  const destination = document.querySelector('#Cover')
  e.preventDefault()
  smoothScroll(destination)
}

function aboutMeScroll (e) {
  const destination = document.querySelector('#AboutMe')
  e.preventDefault()
  smoothScroll(destination)
}

function whyMeScroll (e) {
  const destination = document.querySelector('#WhyMe')
  e.preventDefault()
  smoothScroll(destination)
}

function techniquesScroll (e) {
  const destination = document.querySelector('#Techniques')
  e.preventDefault()
  smoothScroll(destination)
}

function sayHiScroll (e) {
  const destination = document.querySelector('#SayHi')
  e.preventDefault()
  smoothScroll(destination)
}

const MobileMenu = (props) => {
  const { view, position } = props

  return (<div>
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Info</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="" ><li>Show me more</li></a>
        </ul>
      </div>
    </nav>
  </div>)
}
MobileMenu.propTypes = {
  view: PropTypes.string,
  position: PropTypes.string
}

export default MobileMenu
