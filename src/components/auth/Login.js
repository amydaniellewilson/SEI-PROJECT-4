import React from 'react'
import axios from 'axios'

class Login extends React.Component{
  constructor() {
    super()

    this.state = { data: {} }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('login')
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <form>
            <h2 className="title">Login</h2>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <button onClick={this.handleSubmit}type="submit" className="button is-warning">Login</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login
