import React from 'react'
import Navigation from './components/Navigation'
import Cover from './components/Cover'
import AboutMe from './components/AboutMe'
import 'normalize.css'
import 'styles/base/_main.sass' // Global styles
import 'styles/base/_common.sass' // Global styles
import styles from './app.sass' // Css-module styles

const App = () => (
  <div className='App'>
    <Cover />
    <Navigation />
    <AboutMe />
    <div>
      <h1>Welcome to Svahnen</h1>
      <p>This React project just works including <span className={styles.redButton}>css-module</span> local styles.</p>
      <p>Enjoy!</p>
    </div>
  </div>
)

export default App
