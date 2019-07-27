import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import UsersIndex from './components/users/UsersIndex'
import UserShow from './components/users/UserShow'
import EventsIndex from './components/events/EventsIndex'
import EventShow from './components/events/EventShow'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route path="/events/:id" component={EventShow} />
          <Route path="/events" component={EventsIndex} />
          <Route path="/users/:id" component={UserShow} />
          <Route path="/users" component={UsersIndex} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </BrowserRouter>

  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)



//
// fetch('/api/events')
//   .then(res => res.json())
//   .then(events => console.log(events))
//   .catch(err => console.log(err))
