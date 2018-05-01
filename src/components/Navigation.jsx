import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.sass'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import smoothScroll from 'smoothscroll'

function aboutMeScroll (e) {
  const destination = document.querySelector('#AboutMe')
  e.preventDefault()
  smoothScroll(destination)
}

function coverScroll (e) {
  const destination = document.querySelector('#Cover')
  e.preventDefault()
  smoothScroll(destination)
}

const Navigation = () => (
  <div>
    <AppBar position="static" color="primary">
      <Toolbar>
        <ul>
          <li className={styles.navList}><a onClick={coverScroll}>Home</a></li>
          <li className={styles.navList}><a onClick={aboutMeScroll}>About</a></li>
          <li className={styles.navList}><Link to="/guestbook">Guest Book</Link></li>
        </ul>
      </Toolbar>
    </AppBar>
  </div>
)

export default Navigation
