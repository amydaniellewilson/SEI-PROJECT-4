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
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h2 className="title">{user.name}</h2>
              <hr />
              <h4 className="title is-4">Location</h4>
              <p>{user.location}</p>
              <hr/>
              <h4 className="title is-4">Occupation</h4>
              <p>{user.occupation}</p>
              <hr />
              <h4 className="title is-4">Industry</h4>
              <p>{user.industry}</p>
              <hr />
              <h4 className="title is-4">Skills</h4>
              <h3>{this.state.user.skills.map((skill, i)  => ( <p key={i}> {skill.skill} </p> ))}</h3>
              <hr />
              <h4 className="title is-4">About Me</h4>
              <p>{user.description}</p>
              <hr />
            </div>
            
            <div className="column is-half">
              <figure>
                <img className="user-image" src={user.image} alt={user.name} />
              </figure>
              {this.isOwner() && <button onClick={this.handleDelete} className="button">Delete</button>}
              {this.isOwner() && <Link
                className="button"
                to={`/users/edit/${user.id}`}
              >
              Edit Profile
              </Link>}
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default UserShow
