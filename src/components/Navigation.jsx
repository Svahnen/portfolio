import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.sass'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import smoothScroll from 'smoothscroll'
import PropTypes from 'prop-types'

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

const Navigation = (props) => {
  const { view, position } = props

  return (<div>
    {view === 'guestbook' ? <AppBar position="fixed" style={{background: '#0e4f7e'}}>
      <Toolbar>
        <ul>
          <li className={styles.navList}><Link to="/">Back</Link></li>
        </ul>
      </Toolbar>
    </AppBar> : <AppBar position={position === 'fixed' ? 'fixed' : 'static'} style={{background: '#0e4f7e'}}>
      <Toolbar>
        <ul>
          <li className={styles.navList}><a onClick={coverScroll}>Home</a></li>
          <li className={styles.navList}><a onClick={aboutMeScroll}>About</a></li>
          <li className={styles.navList}><a onClick={whyMeScroll}>Why me</a></li>
          <li className={styles.navList}><a onClick={techniquesScroll}>Techniques</a></li>
          <li className={styles.navList}><a onClick={sayHiScroll}>Contact</a></li>
          {/* <li className={styles.navList}><Link to="/guestbook">Guest Book</Link></li> */}
        </ul>
      </Toolbar>
    </AppBar>}
  </div>)
}
Navigation.propTypes = {
  view: PropTypes.string,
  position: PropTypes.string
}

export default Navigation
