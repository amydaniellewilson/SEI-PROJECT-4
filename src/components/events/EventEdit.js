import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'

import EventForm from './EventForm'

class EventEdit extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.response))
  }

  handleChange({ target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/events', this.state.data,{
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/events'))
      .catch(err => console.log(err.response))
  }
  render() {
    console.log(this.state.data)
    if (!this.state.data) return null
    return (
      <section className="event-form-section">
        <EventForm
          data={this.state.data}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </section>
    )
  }
}

export default EventEdit
