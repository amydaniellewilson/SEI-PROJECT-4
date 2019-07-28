import React from 'react'
import axios from 'axios'

import UserCard from './UserCard'

class UsersIndex extends React.Component {
  constructor() {
    super()

    this.state = { users: null }
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.users) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.users.map(user => (
              <UserCard
                key={user.id}
                {...user}/>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default UsersIndex
