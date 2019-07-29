import React from 'react'
import axios from 'axios'

class UserEdit extends React.Component {
  constructor() {
    super()

    this.state = { data: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => {
        const data = res.data
        delete data.password
        this.setState({ data })
      })
      .catch(err => console.log(err.response))
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.put(`/api/users/${this.props.match.params.id}`, this.state.data)
      .then(() => this.props.history.push(`/users/${this.props.match.params.id}`))
      .catch(err => console.log(err.response))
  }

  render() {
    if (!this.state.data) return null
    const { data } = this.state
    return (
      <main className="section">
        <section className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Edit Your Profile</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={data.username || ''}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={data.email || ''}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                  value={data.name || ''}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Occupation</label>
              <div className="control">
                <input
                  className="input"
                  name="occupation"
                  placeholder="Occupation"
                  onChange={this.handleChange}
                  value={data.occupation || ''}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Industry</label>
              <div className="control">
                <input
                  className="input"
                  name="industry"
                  placeholder="Industry"
                  onChange={this.handleChange}
                  value={data.industry || ''}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Location</label>
              <div className="control">
                <input
                  className="input"
                  name="location"
                  placeholder="Location"
                  onChange={this.handleChange}
                  value={data.location || ''}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className="input"
                  name="image"
                  placeholder="Image"
                  onChange={this.handleChange}
                  value={data.image || ''}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  className="textarea"
                  name="description"
                  placeholder="Description"
                  onChange={this.handleChange}
                  value={data.description || ''}
                />
              </div>
            </div>
            <button type="submit" className="button is-info">Submit</button>
          </form>
        </section>
      </main>
    )
  }
}

export default UserEdit
