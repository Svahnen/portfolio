import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './app'

// TODO: Make a great Guestbook
/* import GuestBook from './components/GuestBook' */

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      {/* <Route path="/guestbook" component={GuestBook}/> */}
    </div>
  </Router>
)

export default Routes
