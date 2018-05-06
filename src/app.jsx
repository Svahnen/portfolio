import React from 'react'
import Navigation from './components/Navigation'
import Cover from './components/Cover'
import AboutMe from './components/AboutMe'
import WhyMe from './components/WhyMe'
import SayHi from './components/SayHi'
import Techniques from './components/Techniques'
import 'normalize.css'
import 'styles/base/_main.sass' // Global styles
import 'styles/base/_common.sass' // Global styles

const App = () => (
  <div className='App'>
    <Cover />
    <Navigation />
    <AboutMe />
    <WhyMe />
    <Techniques />
    <SayHi />
  </div>
)

export default App
