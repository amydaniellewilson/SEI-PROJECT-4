import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'

class Login extends React.Component{
  constructor() {
    super()

    this.state = { data: {} }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/')
      })
      .catch(() => this.setState({ errors: 'Invalid Crendentials'}))
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <form onClick={this.handleSubmit}>
            <h2 className="title">Login</h2>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <button type="submit" className="button">Login</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login
