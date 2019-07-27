import React from 'react'
import  { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="tribe navbar-item" >Tribe</Link>

          <a role="button" className='navbar-burger' aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className='navbar-menu'>
          <div className="navbar-start">
            <Link to="/events" className="navbar-item">Events</Link>
            <Link to="/users" className="navbar-item">People</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/register" className="button">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/login" className="button">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
