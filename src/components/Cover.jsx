import React from 'react'
import styles from './Cover.sass'
import Particles from 'react-particles-js'
import Button from 'material-ui/Button'
import smoothScroll from 'smoothscroll'

const particleOptions = {
  params: {
    particles: {
      number: {
        value: 50
      },
      line_linked: {
        shadow: {
          enable: false,
          color: '#3CA9D1',
          blur: 5
        }
      }
    }
  },
  style: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
}

function aboutMeScroll (e) {
  const destination = document.querySelector('#AboutMe')
  e.preventDefault()
  smoothScroll(destination)
}

const Cover = () => (
  <div className={styles.wrapper} id={'Cover'}>
    <Particles params={particleOptions.params} style={particleOptions.style} />
    <div className={styles.textWrapper}>
      <h1 className={styles.text}>Hello, I'm Jonny Svahn.</h1>
      <h1 className={styles.text}>I'm a front end developer student.</h1>
      <div style={{display: 'flex', width: '100%', marginTop: '10px'}}>
        <Button variant="fab" onClick={aboutMeScroll} color="primary" aria-label="add" style={{margin: 'auto'}}>
          <div style={{marginTop: '3px'}}>&#x25BC;</div>
        </Button>
      </div>
    </div>
  </div>
)

export default Cover
