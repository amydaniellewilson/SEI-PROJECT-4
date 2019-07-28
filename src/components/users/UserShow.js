import React from 'react'
import axios from 'axios'

class UserShow extends React.Component {
  constructor() {
    super()

    this.state = { user: null }
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.user)
    if (!this.state.user) return null
    const { user } = this.state
    return(
      <main className="section">
        <div className="container">
          <h2 className="title">{user.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={user.image} alt={user.name} />
              </figure>
              <hr/>
              <h4 className="title is-4">Location</h4>
              <p>{user.location}</p>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Occupation</h4>
              <p>{user.occupation}</p>
              <hr />
              <h4 className="title is-4">Industry</h4>
              <p>{user.industry}</p>
              <hr />
              <h4 className="title is-4">Skills</h4>
              <h3>              {this.state.user.skills.map((skill, i)  => ( <p key={i}> {skill.skill} </p> ))}</h3>
              <hr />
              <h4 className="title is-4">About Me</h4>
              <p>{user.description}</p>
              <hr />

            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default UserShow
