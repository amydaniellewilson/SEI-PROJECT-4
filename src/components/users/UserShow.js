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
    return(
      <div>SHOW</div>
    )
  }
}

export default UserShow
