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
      <section className="login-section">
        <form className="form-wrap" onClick={this.handleSubmit}>
          <h2 className="title">Please Login</h2>
          <label>Email</label>
          <input
            className="form-text"
            onChange={this.handleChange}
            name="email"
            placeholder="Email"
          />
          <label>Password</label>
          <input
            onChange={this.handleChange}
            className="form-text"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit" className="log-in">Login</button>
        </form>
      </section>
    )
  }
}

export default Login
