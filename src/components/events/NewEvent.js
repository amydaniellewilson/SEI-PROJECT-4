import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'

import EventForm from './EventForm'

class NewEvent extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.translatePostcode()
  }

  translatePostcode() {
    const { postcode } = this.state.data
    axios.get(`https://postcodes.io/postcodes/${postcode}`)
      .then(res => {
        const lat = res.data.result.latitude
        const lng = res.data.result.longitude
        const data = { ...this.state.data, lat, lng }
        this.setState({ data}, () =>
          this.newLocation())
      })
      .catch(err => console.log(err.response))
  }

  newLocation() {
    axios.post('/api/events', this.state.data,{
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/events'))
      .catch(err => console.log(err.response))
  }

  render() {
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

export default NewEvent
