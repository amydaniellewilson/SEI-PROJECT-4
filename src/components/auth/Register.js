import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <section className="register-section">
        <form className="register-wrap" onSubmit={this.handleSubmit}>
          <h2 className="title">Register</h2>
          <label>Username</label>
          <input
            className="reg-text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            className="reg-text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            className="reg-text"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <label>Password Confirmation</label>
          <input
            className="reg-text"
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            onChange={this.handleChange}
          />
          <label>Name</label>
          <input
            className="reg-text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <label className="label">Occupation</label>
          <input
            className="reg-text"
            name="occupation"
            placeholder="Occupation"
            onChange={this.handleChange}
          />
          <label>Industry</label>
          <input
            className="reg-text"
            name="industry"
            placeholder="Industry"
            onChange={this.handleChange}
          />
          <label>Location</label>
          <input
            className="reg-text"
            name="location"
            placeholder="Location"
            onChange={this.handleChange}
          />
          <label>Image</label>
          <input
            className="reg-text"
            name="image"
            placeholder="Image"
            onChange={this.handleChange}
          />
          <label>Description</label>
          <input
            className="reg-text"
            name="description"
            placeholder="Description"
            onChange={this.handleChange}
          />
          <button type="submit" className="register-button">Submit</button>
        </form>
      </section>
    )
  }
}

export default Register
