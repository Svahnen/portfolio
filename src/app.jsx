import React from 'react'
import Cover from './components/Cover'
import ScrollWrapper from './components/ScrollWrapper'
import 'normalize.css'
import 'styles/base/_main.sass' // Global styles
import 'styles/base/_common.sass' // Global styles

const App = () => (
  <div className='App'>
    <Cover />
    <ScrollWrapper />
  </div>
)

export default App
