import React from 'react'
import  { Link, withRouter } from 'react-router-dom'
import Auth from '../lib/Auth'

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.logout = this.logout.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="tribe navbar-item" >Tribe</Link>

          <a role="button" className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={this.toggleNavbar}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/events" className="navbar-item">Events</Link>
            {Auth.isAuthenticated() && <Link to="/users" className="navbar-item">People</Link>}
            {Auth.isAuthenticated() && <Link to="/new" className="navbar-item">New Event</Link>}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!Auth.isAuthenticated() && <Link to="/register" className="button">
                  <strong>Register</strong>
                </Link>}
                {!Auth.isAuthenticated() && <Link to="/login" className="button">
                  Log in
                </Link>}
                {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
