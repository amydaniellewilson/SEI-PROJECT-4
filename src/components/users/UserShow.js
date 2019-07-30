import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../lib/Auth'

class UserShow extends React.Component {
  constructor() {
    super()

    this.state = { user: null }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))
  }

  handleDelete() {
    axios.delete(`/api/users/${this.props.match.params.id}`, {
      headers: { Authorization: `${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/users'))
      .catch(err => console.log(err.response))
  }

  isOwner() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user.id
  }

  render() {
    if (!this.state.user) return null
    const { user } = this.state
    return(
      <main className="section">
        <div className="user-container">
          <div className="user-details">
            <h2 className="user-title">{user.name}</h2>
            <br/>
            <h4 className="title is-4">Location</h4>
            <p>{user.location}</p>
            <br/>
            <h4 className="title is-4">Occupation</h4>
            <p>{user.occupation}</p>
            <br />
            <h4 className="title is-4">Industry</h4>
            <p>{user.industry}</p>
            <br />
            <h4 className="title is-4">Skills</h4>
            <h3>{this.state.user.skills.map((skill, i)  => ( <p key={i}> {skill.skill} </p> ))}</h3>
            <br />
            <h4 className="title is-4">About Me</h4>
            <p id="about-me">{user.description}</p>
            <br />
          </div>
          <div>
            <figure>
              <img className="user-image" src={user.image} alt={user.name} />
            </figure>
            {this.isOwner() && <button onClick={this.handleDelete} className="button del">Delete</button>}
            {this.isOwner() && <Link
              className="button edit"
              to={`/users/edit/${user.id}`}
            >
              Edit Profile
            </Link>}
          </div>
        </div>
      </main>
    )
  }
}

export default UserShow
